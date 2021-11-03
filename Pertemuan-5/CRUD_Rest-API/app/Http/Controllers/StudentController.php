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
        $student = Student::find($id);
        if ($student) {
            $input = [
                'nama' => $request->nama ?? $student->nama,
                'nim' => $request->nim ?? $student->nim,
                'email' => $request->email ?? $student->email,
                'jurusan' => $request->jurusan ?? $student->jurusan
            ];
            $student->update($input);

            $response = [
                "message" => "Student is Update",
                "data" => $student
            ];
            return response()->json($response, 200);
        } else {
            $response = [
                "message" => "Data Not Found"
            ];
            return response($response, 404);
        }
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
