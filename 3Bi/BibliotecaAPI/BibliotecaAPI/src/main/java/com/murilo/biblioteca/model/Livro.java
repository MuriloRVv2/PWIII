package com.murilo.biblioteca.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "livros")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Livro {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "O título é obrigatório")
    private String titulo;

    @NotBlank(message = "O autor é obrigatório")
    private String autor;

    private String genero;

    private Integer anoPublicacao;

    @Enumerated(EnumType.STRING)
    private StatusLeitura status;

    @Min(value = 0, message = "A avaliação mínima é 0")
    @Max(value = 5, message = "A avaliação máxima é 5")
    private Integer avaliacao;
}
