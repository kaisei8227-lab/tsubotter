package com.example.tsubotter.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
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
import com.example.tsubotter.repository.PostRepository;

@RestController
@RequestMapping("/api/posts")
@CrossOrigin(origins = "*")
public class PostController {

    @Autowired
    private PostRepository postRepository;

    // 1. 全投稿の取得 (GET /api/posts)
    @GetMapping
    public List<Post> getAllPosts() {
        return postRepository.findAll();
    }

    // 2. 新規投稿の追加 (POST /api/posts)
    @PostMapping
    public ResponseEntity<Post> createPost(@RequestBody Post newPost) {
        if (newPost.getLikes() == null) {
            newPost.setLikes(new HashMap<>());
        }
        Post savedPost = postRepository.save(newPost);
        return ResponseEntity.ok(savedPost);
    }

    // 3. 投稿の削除 (DELETE /api/posts/{id})
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletePost(@PathVariable String id) {
        if (postRepository.existsById(id)) {
            postRepository.deleteById(id);
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

        return postRepository.findById(id).map(post -> {
            Map<String, Boolean> likes = post.getLikes();
            if (likes == null) {
                likes = new HashMap<>();
            }

            if (likes.containsKey(userId)) {
                likes.remove(userId);
            } else {
                likes.put(userId, true);
            }

            post.setLikes(likes);
            Post updatedPost = postRepository.save(post);
            return ResponseEntity.ok(updatedPost);
        }).orElse(ResponseEntity.notFound().build());
    }
}