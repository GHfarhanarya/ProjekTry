"use client";

import React, { useState } from "react";

const Questionnaire = () => {
    // State untuk menyimpan jawaban
    const [answers, setAnswers] = useState({
        question1: "",
        question2: "",
    });

    // Handler perubahan jawaban
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setAnswers({ ...answers, [name]: value });
    };

    // Handler submit
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Jawaban:", answers);
        alert("Kuesioner berhasil disimpan!");
    };

    return (
        <div className="bg-gray-100 py-10 px-5 flex justify-center items-center">
            <div className="max-w-2xl bg-white rounded-lg shadow-lg p-6 mx-auto">
                <h2 className="text-2xl font-semibold text-center mb-6">Kuesioner</h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <label className="block text-lg font-medium text-gray-700 mb-2">
                            1. Seberapa puas Anda dengan layanan kami?
                        </label>
                        <div className="space-y-2">
                            <label className="flex items-center">
                                <input
                                    type="radio"
                                    name="question1"
                                    value="Sangat Puas"
                                    checked={answers.question1 === "Sangat Puas"}
                                    onChange={handleChange}
                                    className="mr-2"
                                />
                                Sangat Puas
                            </label>
                            <label className="flex items-center">
                                <input
                                    type="radio"
                                    name="question1"
                                    value="Puas"
                                    checked={answers.question1 === "Puas"}
                                    onChange={handleChange}
                                    className="mr-2"
                                />
                                Puas
                            </label>
                            <label className="flex items-center">
                                <input
                                    type="radio"
                                    name="question1"
                                    value="Tidak Puas"
                                    checked={answers.question1 === "Tidak Puas"}
                                    onChange={handleChange}
                                    className="mr-2"
                                />
                                Tidak Puas
                            </label>
                        </div>
                    </div>

                    <div>
                        <label className="block text-lg font-medium text-gray-700 mb-2">
                            2. Apa saran Anda untuk meningkatkan layanan kami?
                        </label>
                        <textarea
                            name="question2"
                            value={answers.question2}
                            onChange={handleChange}
                            rows={4}
                            className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
                            placeholder="Tulis saran Anda di sini..."
                        />
                    </div>

                    <div className="text-center">
                        <button
                            type="submit"
                            className="rounded bg-blue-500 px-6 py-2 text-white font-medium hover:bg-blue-600"
                        >
                            Kirim Jawaban
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Questionnaire;
