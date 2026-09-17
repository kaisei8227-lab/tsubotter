# Javaの実行環境（Java 17 または 21 に合わせて調整可）
FROM eclipse-temurin:17-jdk-alpine AS build
WORKDIR /app

# プロジェクトファイルをコピーしてビルド
COPY . .
RUN ./gradlew build -x test

# 実行環境
FROM eclipse-temurin:17-jre-alpine
WORKDIR /app
COPY --from=build /app/build/libs/*.jar app.jar

EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]