package com.example.tsubotter.model;
public class Post {
    private String nickname;
    private String department;
    private String text;
    private String time;

    // コンストラクタ / Getter / Setter
    public Post() {}
    public Post(String nickname, String department, String text, String time) {
        this.nickname = nickname;
        this.department = department;
        this.text = text;
        this.time = time;
    }

    public String getNickname() { return nickname; }
    public void setNickname(String nickname) { this.nickname = nickname; }
    public String getDepartment() { return department; }
    public void setDepartment(String department) { this.department = department; }
    public String getText() { return text; }
    public void setText(String text) { this.text = text; }
    public String getTime() { return time; }
    public void setTime(String time) { this.time = time; }
}
