# Java 21 の実行環境を使用
FROM eclipse-temurin:21-jdk-alpine AS build
WORKDIR /app

# プロジェクトファイルをコピー
COPY . .

# gradlew に実行権限を付与してビルド
RUN chmod +x ./gradlew
RUN ./gradlew build -x test

# 実行環境
FROM eclipse-temurin:21-jre-alpine
WORKDIR /app
COPY --from=build /app/build/libs/*.jar app.jar

EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]