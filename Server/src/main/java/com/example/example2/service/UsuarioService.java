package com.example.example2.service;

import com.example.example2.model.Usuario;
import com.example.example2.model.UsuarioRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
public class UsuarioService {

    @Autowired
    private UsuarioRepository repository;

    @GetMapping("/listaUsuarios")
    public Iterable<Usuario> getUsuario() {
        return repository.findAll();
    }
    
}