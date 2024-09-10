package com.ibedemo.backend.controller;

import com.ibedemo.backend.dto.LoginRequestDTO;
import com.ibedemo.backend.model.User;
import com.ibedemo.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("api/v1")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("registerUser")
    public String registerUser(@RequestBody User user) {

        return userService.registerUser(user);
    }

    @PostMapping("loginUser")
    public String loginUser(@RequestBody LoginRequestDTO user) {
        return userService.loginUser(user);
    }

    @GetMapping("getUser")
    public User getUser(@RequestParam String username) {
        return userService.getUser(username);
    }
}
