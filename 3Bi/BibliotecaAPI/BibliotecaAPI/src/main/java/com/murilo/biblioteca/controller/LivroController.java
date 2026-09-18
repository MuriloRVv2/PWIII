package com.murilo.biblioteca.controller;

import com.murilo.biblioteca.model.Livro;
import com.murilo.biblioteca.model.StatusLeitura;
import com.murilo.biblioteca.service.LivroService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.NoSuchElementException;

@RestController
@RequestMapping("/livros")
@RequiredArgsConstructor
public class LivroController {

    private final LivroService livroService;

    @GetMapping
    public List<Livro> listar() {
        return livroService.listarTodos();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Livro> buscar(@PathVariable Long id) {
        return ResponseEntity.ok(livroService.buscarPorId(id));
    }

    @GetMapping("/status/{status}")
    public List<Livro> listarPorStatus(@PathVariable StatusLeitura status) {
        return livroService.listarPorStatus(status);
    }

    @GetMapping("/buscar")
    public List<Livro> buscarPorAutor(@RequestParam String autor) {
        return livroService.buscarPorAutor(autor);
    }

    @PostMapping
    public ResponseEntity<Livro> criar(@Valid @RequestBody Livro livro) {
        Livro criado = livroService.criar(livro);
        return ResponseEntity.status(HttpStatus.CREATED).body(criado);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Livro> atualizar(@PathVariable Long id, @Valid @RequestBody Livro livro) {
        return ResponseEntity.ok(livroService.atualizar(id, livro));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletar(@PathVariable Long id) {
        livroService.deletar(id);
        return ResponseEntity.noContent().build();
    }

    @ExceptionHandler(NoSuchElementException.class)
    public ResponseEntity<String> tratarNaoEncontrado(NoSuchElementException ex) {
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(ex.getMessage());
    }
}
