package com.example.tsubotter.model;

import java.util.HashMap;
import java.util.Map;

import jakarta.persistence.Column;
import jakarta.persistence.ElementCollection;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "posts")
public class Post {

    @Id
    private String id;

    private String authorId;
    private String nickname;
    private String dept;
    private String course;

    @Column(length = 1000)
    private String text;

    private String visibility;

    @ElementCollection(fetch = FetchType.EAGER)
    private Map<String, Boolean> likes = new HashMap<>();

    private long createdAt;

    // JPA用のデフォルトコンストラクタ
    public Post() {}

    // コンストラクタ
    public Post(String id, String authorId, String nickname, String dept, String course, String text, String visibility, Map<String, Boolean> likes, long createdAt) {
        this.id = id;
        this.authorId = authorId;
        this.nickname = nickname;
        this.dept = dept;
        this.course = course;
        this.text = text;
        this.visibility = visibility;
        this.likes = likes != null ? likes : new HashMap<>();
        this.createdAt = createdAt;
    }

    // --- Getter / Setter ---

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getAuthorId() {
        return authorId;
    }

    public void setAuthorId(String authorId) {
        this.authorId = authorId;
    }

    public String getNickname() {
        return nickname;
    }

    public void setNickname(String nickname) {
        this.nickname = nickname;
    }

    public String getDept() {
        return dept;
    }

    public void setDept(String dept) {
        this.dept = dept;
    }

    public String getCourse() {
        return course;
    }

    public void setCourse(String course) {
        this.course = course;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public String getVisibility() {
        return visibility;
    }

    public void setVisibility(String visibility) {
        this.visibility = visibility;
    }

    public Map<String, Boolean> getLikes() {
        return likes;
    }

    public void setLikes(Map<String, Boolean> likes) {
        this.likes = likes;
    }

    public long getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(long createdAt) {
        this.createdAt = createdAt;
    }
}