export default function Index() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center gap-6">
      <div className="w-64 h-64 rounded-3xl overflow-hidden shadow-xl border border-gray-100">
        <img
          src="https://cdn.poehali.dev/projects/b71652aa-9f9a-4d81-91bf-f1456916da94/files/4afd85fa-ee0c-4349-a1b2-d4dacc7a728f.jpg"
          alt="Логотип"
          className="w-full h-full object-contain"
        />
      </div>
      <p className="text-sm text-gray-400 font-mono">Нажми правой кнопкой → «Сохранить изображение»</p>
    </div>
  );
}
