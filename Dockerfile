# Use Bun image from the Docker Hub
FROM oven/bun:debian

# Create and change to the app directory
WORKDIR /usr/src/app

# Copy app files
COPY . .

# Install only necessary production dependencies
RUN bun install --frozen-lockfile --production

# Generate Prisma
RUN bunx prisma generate

# Run the application
CMD ["bun", "start"]