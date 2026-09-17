package com.example.tsubotter.controller;

import java.util.Collections;
import java.util.List;
import java.util.Map;
import java.util.concurrent.CopyOnWriteArrayList;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.tsubotter.model.Post;

@RestController
@RequestMapping("/api/posts")
@CrossOrigin(origins = "*") // 端末間（CORS）通信を許可
public class PostController {

    // スレッドセーフなリストを使用して投稿データをメモリ上に保持
    private final List<Post> posts = new CopyOnWriteArrayList<>();

    // 1. 全投稿の取得 (GET /api/posts)
    @GetMapping
    public List<Post> getAllPosts() {
        return posts;
    }

    // 2. 新規投稿の追加 (POST /api/posts)
    @PostMapping
    public ResponseEntity<Post> createPost(@RequestBody Post newPost) {
        if (newPost.getLikes() == null) {
            newPost.setLikes(Collections.emptyMap());
        }
        // 最新の投稿がリストの先頭に来るように追加
        posts.add(0, newPost);
        return ResponseEntity.ok(newPost);
    }

    // 3. 投稿の削除 (DELETE /api/posts/{id})
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletePost(@PathVariable String id) {
        boolean removed = posts.removeIf(post -> post.getId().equals(id));
        if (removed) {
            return ResponseEntity.ok().build();
        }
        return ResponseEntity.notFound().build();
    }

    // 4. いいねの切り替え (POST /api/posts/{id}/like)
    @PostMapping("/{id}/like")
    public ResponseEntity<Post> toggleLike(@PathVariable String id, @RequestBody Map<String, String> payload) {
        String userId = payload.get("userId");
        if (userId == null) {
            return ResponseEntity.badRequest().build();
        }

        for (Post post : posts) {
            if (post.getId().equals(id)) {
                Map<String, Boolean> likes = post.getLikes();
                if (likes == null) {
                    likes = new java.util.HashMap<>();
                } else {
                    likes = new java.util.HashMap<>(likes);
                }

                if (likes.containsKey(userId)) {
                    likes.remove(userId);
                } else {
                    likes.put(userId, true);
                }

                post.setLikes(likes);
                return ResponseEntity.ok(post);
            }
        }
        return ResponseEntity.notFound().build();
    }
}