<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Patient;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redis;

use function PHPUnit\Framework\isEmpty;

class PatientController extends Controller
{
    // function untuk mendapatkan all resource
    public function index()
    {
        $patient = Patient::all();

        if ($patient == isEmpty()) {
            $response = [
                'message' => 'Data is Empty'
            ];
            return response()->json($response, 200);
        }
        $response = [
            'message' => 'Get All Resource',
            'data' => $patient
        ];
        return response()->json($response, 200);
    }


    public function store(Request $request)
    {
        // function untuk menambahkan resource with validasi
        $validator = Validator::make(
            $request->all(),
            [
                'name' => 'required',
                'phone' => 'required|numeric',
                'address' => 'required',
                'status' => 'required',
                'in_date_at' => 'required',
                'out_date_at' => 'required'
            ]
        );
        // Validasi kondisi
        if ($validator->fails()) {

            return response()->json($validator->errors());
        }

        $patient = Patient::create([
            'name' => $request->name,
            'phone' => $request->phone,
            'address' => $request->address,
            'status' => $request->status,
            'in_date_at' => $request->in_date_at,
            'out_date_at' => $request->out_date_at
        ]);
        $response = [
            'message' => 'Resource is added successfully',
            'data' => $patient
        ];
        return response()->json($response, 201);
    }

    public function show($id)
    {
        // function untuk mendapatkan detail resource by find (id)
        $patient = Patient::find($id);

        if ($id) {
            $response = [
                'message' => 'Get Detail Resource',
                'data' => $patient
            ];
            return response()->json($response, 200);
        }
        $response = [
            'message' => 'Resource not found'
        ];
        return response()->json($response, 404);
    }

    public function update(Request $request, $id)
    {
        // function untuk mengupdate resource
        $patient = Patient::find($id);

        // Eloquent kondisi menggunakan tanda "?" 
        // dengan arti jika column name ingin di update, maka akan me-request dan mengisi column name baru,
        // jika tidak maka akan mengembalikan data column sebelumnya, begitu seterusnya
        if ($patient) {
            $input = [
                'name' => $request->name ?? $patient->name,
                'phone' => $request->phone ?? $patient->phone,
                'address' => $request->address ?? $patient->address,
                'status' => $request->status ?? $patient->status,
                'in_date_at' => $request->in_date_at ?? $patient->in_date_at,
                'out_date_at' => $request->out_date_at ?? $patient->out_date_at
            ];
            $patient->update($input);

            $response = [
                'message' => 'Resource is update successfully',
                'data' => $patient
            ];
            return response()->json($response, 200);
        }
        $response = [
            'message' => 'Resource not found'
        ];
        return response()->json($response, 404);
    }

    public function destroy($id)
    {
        // function menghapus resource by find(id) 
        $patient = Patient::find($id);

        if ($id) {
            $patient->delete();

            $response = [
                'message' => 'Resource is delete successfully',
                'data' => $patient
            ];
            return response()->json($response, 200);
        }
        $response = [
            'message' => 'Resorce not found'
        ];
        return response()->json($response, 404);
    }

    public function search($name)
    {
        // function search by name menggunakan where dengan like untuk mendapatkan data dan % mendefinisikan WILDCARS
        $patient = Patient::where('name', 'like', '%' . $name)->get();

        if ($patient) {

            $response = [
                'message' => 'Get searched resource',
                'data' => $patient
            ];
            return response()->json($response, 200);
        }

        $response = [
            'message' => 'Resorce not found'
        ];
        return response()->json($response, 404);
    }

    public function positive($status)
    {
        // function search by status positive 
        $patient = Patient::where('status', 'like', '%' . $status)->get();

        if ($patient) {
            $response = [
                'message' => 'Get Positive Resource',
                'total' => count($patient),
                'data' =>  $patient
            ];
            return response()->json($response, 200);
        }
        $response = [
            'message' => 'Resorce not found',
        ];
        return response()->json($response, 404);
    }

    public function recovered($status)
    {
        // function search by status recovered 
        $patient = Patient::where('status', 'like', '%' . $status)->get();

        if ($patient) {
            $response = [
                'message' => 'Get Recovered Resorce',
                'total' => count($patient),
                'data' => $patient
            ];
            return response()->json($response, 200);
        }
        $response = [
            'message' => 'Resorce not found',
        ];
        return response()->json($response, 404);
    }

    public function dead($status)
    {
        // function search by status dead 
        $patient = Patient::where('status', 'like', '%' . $status)->get();

        if ($patient) {
            $response = [
                'message' => 'Get Dead Resorce',
                'total' => count($patient),
                'data' => $patient
            ];
            return response()->json($response, 200);
        }
        $response = [
            'message' => 'Resorce not found',
        ];
        return response()->json($response, 404);
    }
}
