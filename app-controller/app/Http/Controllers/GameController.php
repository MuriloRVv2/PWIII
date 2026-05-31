<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class GameController extends Controller
{
    //Metodo para pesquisar os jogos
    public function search($gameName){
        return "Procurando pelo jogo: " . $gameName;
    }
}
