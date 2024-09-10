package com.ibedemo.backend.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import static org.springframework.security.config.Customizer.withDefaults;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Autowired
    private UserDetailsService userDetailsService;

    @Autowired
    private JwtFilter jwtFilter;

    private String[] unprotectedApiEndpoints = {
            "/api/v1/loginUser",
            "api/v1/registerUser",
                                "api/v1/availableFlights",
            "api/v1/getUser",
            "api/v1/getAirports",
            "api/v1/getGenders",
            "api/v1/getCountries",
            "api/v1/getNationalities",
            "api/v1/getMasterData",
    };

    @Bean
    public AuthenticationProvider authProvider() {
        DaoAuthenticationProvider provider = new DaoAuthenticationProvider();
        provider.setUserDetailsService(userDetailsService);
        provider.setPasswordEncoder(new BCryptPasswordEncoder(12));
        return provider;
    }

    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration config) throws Exception {
        return config.getAuthenticationManager();
    }

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .authorizeHttpRequests(authorize -> authorize
                                .requestMatchers(
//                                        "/api/v1/loginuser",
//                                        "api/v1/registeruser",
////                                "api/v1/availableflights",
//                                        "api/v1/getairports",
//                                        "api/v1/getgenders",
//                                        "api/v1/getcountries",
//                                        "api/v1/getnationalities"
                                        unprotectedApiEndpoints
                                ).permitAll() // Allow public access to these endpoints
                                .anyRequest().authenticated() // Require authentication for all other requests
                )
                .csrf(csrf -> csrf.disable()) // Disable CSRF protection (use carefully, only if needed)
                .formLogin(withDefaults())
                .addFilterBefore(jwtFilter, UsernamePasswordAuthenticationFilter.class); // Enable form-based login (you can customize it further if needed)

        return http.build();
    }

    @Bean
    public UserDetailsService userDetailsService() {
        return username -> {
            // Implement your user fetching logic here
            throw new UsernameNotFoundException("User not found");
        };
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder(); // Use BCrypt for password encoding
    }

}

