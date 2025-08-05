# Dùng image PHP chính thức
FROM php:8.2-cli

# Set thư mục làm việc là /app
WORKDIR /app

# Copy toàn bộ code từ máy lên Docker container
COPY . .

# Expose port 10000 để chạy server
EXPOSE 10000

# Chạy PHP built-in server với root là thư mục hiện tại
CMD ["php", "-S", "0.0.0.0:10000", "-t", "."]
