package com.example.tsubotter.controller;

import java.util.Map;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.tsubotter.dto.RegisterRequest;
import com.example.tsubotter.model.User;
import com.example.tsubotter.service.UserService;

@RestController
@RequestMapping("/api")
public class AuthController {

    private final UserService userService;

    public AuthController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody RegisterRequest request) {
        try {
            User registeredUser = userService.registerUser(request);

            return ResponseEntity.ok(Map.of(
                "message", "登録が完了しました",
                "studentNumber", registeredUser.getStudentNumber(),
                "nickname", registeredUser.getNickname(),
                "department", registeredUser.getDepartment(),
                "course", registeredUser.getCourse()
            ));
        } catch (IllegalArgumentException e) {
            // バリデーションエラー時はメッセージ付きで400(Bad Request)を返却
            return ResponseEntity.badRequest().body(Map.of("error", e.getMessage()));
        }
    }
}