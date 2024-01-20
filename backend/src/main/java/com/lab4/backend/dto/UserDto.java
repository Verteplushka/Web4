package com.lab4.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class UserDto {
    private Long id;
    private Boolean requestType;
    private String login;
    private String password;
    public UserDto(Long id, String login, String password){
        setId(id);
        setLogin(login);
        setPassword(password);
    }
}
