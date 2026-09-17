package com.example.tsubotter.service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.tsubotter.dto.RegisterRequest;
import com.example.tsubotter.model.User;
import com.example.tsubotter.repository.RosterRepository;
import com.example.tsubotter.repository.UserRepository;

@Service
public class UserService {

    private final UserRepository userRepository;
    private final RosterRepository rosterRepository;

    public UserService(UserRepository userRepository, RosterRepository rosterRepository) {
        this.userRepository = userRepository;
        this.rosterRepository = rosterRepository;
    }

    @Transactional
    public User registerUser(RegisterRequest req) {
        // 1. 学籍番号の桁数バリデーション（6桁の数字）
        if (req.getStudentNumber() == null || !req.getStudentNumber().matches("^\\d{6}$")) {
            throw new IllegalArgumentException("学籍番号は6桁の数字で入力してください。");
        }

        // 2. 名簿（Roster）に学籍番号が存在するかチェック【学校限定の実現】
        if (!rosterRepository.existsById(req.getStudentNumber())) {
            throw new IllegalArgumentException("この学籍番号は名簿に見つかりません。");
        }

        // 3. 既にユーザー登録済みでないかチェック
        if (userRepository.existsById(req.getStudentNumber())) {
            throw new IllegalArgumentException("この学籍番号はすでに登録されています。ログインしてください。");
        }

        // 4. 各種入力値のバリデーション
        if (req.getNickname() == null || req.getNickname().isBlank()) {
            throw new IllegalArgumentException("ニックネームを入力してください。");
        }
        if (req.getNickname().length() > 20) {
            throw new IllegalArgumentException("ニックネームは20文字以内で入力してください。");
        }
        if (req.getPassword() == null || req.getPassword().length() < 4) {
            throw new IllegalArgumentException("パスワードは4文字以上で設定してください。");
        }

        // 5. ユーザーデータの生成と保存
        User user = new User();
        user.setStudentNumber(req.getStudentNumber());
        user.setNickname(req.getNickname());
        user.setDepartment(req.getDepartment());
        user.setCourse(req.getCourse());
        user.setPassword(req.getPassword()); // ※本番運用時はパスワードの暗号化を行う

        return userRepository.save(user);
    }
}