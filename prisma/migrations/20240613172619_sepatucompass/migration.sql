-- CreateTable
CREATE TABLE "Shoes" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "imageURL" VARCHAR(255) NOT NULL,
    "price" INTEGER,
    "size" TEXT[],
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "orderShoesId" INTEGER NOT NULL,

    CONSTRAINT "Shoes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OrderShoes" (
    "id" SERIAL NOT NULL,
    "quantity" INTEGER,

    CONSTRAINT "OrderShoes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Orders" (
    "id" INTEGER NOT NULL,
    "status" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "orderShoesId" INTEGER NOT NULL,

    CONSTRAINT "Orders_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Shoes" ADD CONSTRAINT "Shoes_orderShoesId_fkey" FOREIGN KEY ("orderShoesId") REFERENCES "OrderShoes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Orders" ADD CONSTRAINT "Orders_orderShoesId_fkey" FOREIGN KEY ("orderShoesId") REFERENCES "OrderShoes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
