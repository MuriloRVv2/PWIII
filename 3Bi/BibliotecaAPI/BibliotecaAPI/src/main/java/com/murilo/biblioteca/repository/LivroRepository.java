package com.murilo.biblioteca.repository;

import com.murilo.biblioteca.model.Livro;
import com.murilo.biblioteca.model.StatusLeitura;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface LivroRepository extends JpaRepository<Livro, Long> {

    List<Livro> findByStatus(StatusLeitura status);

    List<Livro> findByAutorContainingIgnoreCase(String autor);
}
