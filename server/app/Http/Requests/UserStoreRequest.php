<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UserStoreRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return false;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        if ($this->isMethod('post')) {
            return [
                'name' => 'required|string|max:255',
                'email' => 'required|string',
                'phone' => 'required|numeric'
            ];
        } elseif ($this->isMethod('put') || $this->isMethod('patch')) {
            return [
                'name' => 'required|string|max:255',
                'email' => 'required|string',
                'password' => 'required|numeric'
            ];
        }

        return [];
    }

    /**
     * Get the error messages for the defined validation rules.
     *
     * @return array<string, string>
     */
    public function messages(): array
    {
        if ($this->isMethod('post')) {
            return [
                'name.required' => 'The name field is required.',
                'name.string' => 'The name must be a string.',
                'name.max' => 'The name may not be greater than 255 characters.',
                'email.required' => 'The email field is required.',
                'email.string' => 'The email must be a string.',
                'phone.required' => 'The phone field is required.',
                'phone.numeric' => 'The phone must be a number.'
            ];
        } elseif ($this->isMethod('put') || $this->isMethod('patch')) {
            return [
                'name.required' => 'The name field is required.',
                'name.string' => 'The name must be a string.',
                'name.max' => 'The name may not be greater than 255 characters.',
                'email.required' => 'The email field is required.',
                'email.string' => 'The email must be a string.',
                'password.required' => 'The password field is required.',
                'password.numeric' => 'The password must be a number.'
            ];
        }

        return [];
    }
}
