package com.murilo.biblioteca.service;

import com.murilo.biblioteca.model.Livro;
import com.murilo.biblioteca.model.StatusLeitura;
import com.murilo.biblioteca.repository.LivroRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;

@Service
@RequiredArgsConstructor
public class LivroService {

    private final LivroRepository livroRepository;

    public List<Livro> listarTodos() {
        return livroRepository.findAll();
    }

    public Livro buscarPorId(Long id) {
        return livroRepository.findById(id)
                .orElseThrow(() -> new NoSuchElementException("Livro não encontrado: " + id));
    }

    public List<Livro> listarPorStatus(StatusLeitura status) {
        return livroRepository.findByStatus(status);
    }

    public List<Livro> buscarPorAutor(String autor) {
        return livroRepository.findByAutorContainingIgnoreCase(autor);
    }

    public Livro criar(Livro livro) {
        livro.setId(null);
        if (livro.getStatus() == null) {
            livro.setStatus(StatusLeitura.QUERO_LER);
        }
        return livroRepository.save(livro);
    }

    public Livro atualizar(Long id, Livro dados) {
        Livro livro = buscarPorId(id);
        livro.setTitulo(dados.getTitulo());
        livro.setAutor(dados.getAutor());
        livro.setGenero(dados.getGenero());
        livro.setAnoPublicacao(dados.getAnoPublicacao());
        livro.setStatus(dados.getStatus());
        livro.setAvaliacao(dados.getAvaliacao());
        return livroRepository.save(livro);
    }

    public void deletar(Long id) {
        if (!livroRepository.existsById(id)) {
            throw new NoSuchElementException("Livro não encontrado: " + id);
        }
        livroRepository.deleteById(id);
    }
}
