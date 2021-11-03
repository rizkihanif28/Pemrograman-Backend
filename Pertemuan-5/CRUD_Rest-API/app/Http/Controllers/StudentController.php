<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Student;
use PDO;

class StudentController extends Controller
{
    public function index()
    {
        $student = Student::all();

        $response = [
            "message" => "Get All Students",
            "data" => $student
        ];

        return response()->json($response, 200);
    }

    public function store(Request $request)
    {
        $input = [
            'nama' => $request->nama,
            'nim' => $request->nim,
            'email' => $request->email,
            'jurusan' => $request->jurusan
        ];

        $student = Student::create($input);

        $response = [
            'message' => 'Student is Created',
            'data' => $student
        ];

        return response($response, 201);
    }

    public function update(Request $request, $id)
    {
        $student = Student::where('id', $id)->first();
        if ($student) {

            $student->nama = $request->nama ? $request->nama : $student->nama;
            $student->nim = $request->nim ? $request->nim : $student->nim;
            $student->email = $request->email ? $request->email : $student->email;
            $student->jurusan = $request->jurusan ? $request->jurusan : $student->jurusan;

            $student->save();

            $response = [
                'message' => 'update',
                'data' => 'id ' . $id . ' success'
            ];

            return response($response, 201);
        }
        $response = [
            'message' => 'update failed',
            'data' => 'id ' . $id . ' not found'
        ];

        return response($response, 400);
    }

    public function destroy($id)
    {
        $student = Student::find($id);

        if ($student) {
            $student->delete();

            $response = [
                "message" => "Student is Deleted"
            ];
            return response()->json($response, 200);
        } else {
            $response = [
                "messsage" => "Data Not Found"
            ];
            return response()->json($response, 404);
        }
    }
}
