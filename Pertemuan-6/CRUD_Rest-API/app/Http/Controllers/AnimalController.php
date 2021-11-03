<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class AnimalController extends Controller
{
    #Membuat Array Animals
    public $animals = ["Sapi", "Kerbau", "Musang", "Kelinci"];

    #Membuat function untuk menampilkan data (index)
    public function index()
    {
        foreach ($this->animals as $animal) {
            echo "$animal <br>";
        }
    }
    #Membuat function untuk menambahkan hewan 
    public function store(Request $request)
    {
        array_push($this->animals, $request->nama);
        $this->index();
    }

    #Membuat function untuk mengedit hewan
    public function update(Request $request, $id)
    {
        $this->animals[$id] = $request->nama;
        $this->index();
    }

    #Membuat function untuk menghapus data hewan
    public function destroy($id)
    {
        unset($this->animals[$id]);
        echo "Data ini dihapus - id $id ";
    }
}
