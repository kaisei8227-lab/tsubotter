package com.example.tsubotter.controller;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.tsubotter.model.Post; // Postクラスを読み込むimport文を追加

@RestController
@RequestMapping("/api/posts")
public class PostController {

    // メモリ上に投稿一覧を保持（サーバーが動いている間保存されます）
    private final List<Post> posts = Collections.synchronizedList(new ArrayList<>());

    // 投稿一覧を取得
    @GetMapping
    public List<Post> getPosts() {
        return posts;
    }

    // 新しい投稿を保存
    @PostMapping
    public Post createPost(@RequestBody Post post) {
        posts.add(0, post); // 新しい投稿を先頭に追加
        return post;
    }
}