package com.murilo.biblioteca.controller;

import com.murilo.biblioteca.model.Livro;
import com.murilo.biblioteca.model.StatusLeitura;
import com.murilo.biblioteca.service.LivroService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Front-end simples em Thymeleaf, só para demonstrar a aplicação
 * funcionando visualmente. A API REST em /livros (LivroController)
 * continua existindo normalmente e não depende desta tela.
 */
@Controller
@RequestMapping("/painel")
@RequiredArgsConstructor
public class LivroViewController {

    private final LivroService livroService;

    @GetMapping
    public String listar(Model model) {
        model.addAttribute("livros", livroService.listarTodos());
        return "index";
    }

    @GetMapping("/novo")
    public String novoForm(Model model) {
        model.addAttribute("livro", new Livro());
        model.addAttribute("statusList", StatusLeitura.values());
        return "form";
    }

    @GetMapping("/editar/{id}")
    public String editarForm(@PathVariable Long id, Model model) {
        model.addAttribute("livro", livroService.buscarPorId(id));
        model.addAttribute("statusList", StatusLeitura.values());
        return "form";
    }

    @PostMapping("/salvar")
    public String salvar(@ModelAttribute Livro livro) {
        if (livro.getId() == null) {
            livroService.criar(livro);
        } else {
            livroService.atualizar(livro.getId(), livro);
        }
        return "redirect:/painel";
    }

    @GetMapping("/excluir/{id}")
    public String excluir(@PathVariable Long id) {
        livroService.deletar(id);
        return "redirect:/painel";
    }
}
