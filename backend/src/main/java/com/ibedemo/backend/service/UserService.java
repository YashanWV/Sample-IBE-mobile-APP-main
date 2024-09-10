package com.ibedemo.backend.service;

import com.ibedemo.backend.dto.LoginRequestDTO;
import com.ibedemo.backend.model.User;
import com.ibedemo.backend.repo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepo userRepo;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private JwtService jwtService;

    public String registerUser(User user) {

//        if(repo.findByUsernameOrPassportOrNicOrContactOrAddress(user.getUsername(),
//                user.getPassport(),
//                user.getNic(),
//                user.getContact(),
//                user.getAddress()).isPresent()) {
//            //return "Email already exists!";
//            //throw new DataIntegrityViolationException("Email already exists!");
//
//            if()
//        }

        if (userRepo.findByUsername(user.getUsername()) != null) {
            return "Email already registered!";
        }

        if (userRepo.findByPassport(user.getPassport()) != null) {
            return "Existing Passport Id!";
        }

        if (userRepo.findByNic(user.getNic()) != null) {
            return "Existing NIC number!";
        }

        if (userRepo.findByContact(user.getContact()) != null) {
            return "Existing contact number!";
        }

        if (userRepo.findByAddress(user.getAddress()) != null) {
            return "Address exists!";
        }

        user.setPassword(passwordEncoder.encode(user.getPassword()));
        User stringifiedUser = userRepo.save(user);
        return stringifiedUser.toString();
    }

    public String loginUser(LoginRequestDTO user) {

        Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(user.getUsername(), user.getPassword()));

        if (authentication.isAuthenticated()) {
            String token = jwtService.generateToken(user.getUsername());
            System.out.println(token);
            return token;
        } else return null;
    }

    public User getUser(String username) {
        System.out.println(username);
        return userRepo.findByUsername(username);
    }
}
