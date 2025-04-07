import Link from 'next/link'

const themes = [
  {
    id: 'technical-minimalism',
    name: '테크니컬 미니멀리즘',
    description: '깔끔한 디자인과 기하학적 요소를 활용한 현대적인 테마',
    color: 'bg-blue-600'
  },
  {
    id: 'academic-elegance',
    name: '아카데믹 엘레강스',
    description: '전통적인 학술적 분위기와 현대성이 조화를 이루는 테마',
    color: 'bg-slate-700'
  },
  {
    id: 'dark-modern',
    name: '다크 모던',
    description: '세련된 다크 테마와 네온 포인트 컬러가 특징인 미래지향적 디자인',
    color: 'bg-gray-900'
  },
  {
    id: 'nature-inspired',
    name: '네이처 인스파이어드',
    description: '자연스러운 그라데이션과 유기적 형태가 특징인 부드러운 디자인',
    color: 'bg-green-600'
  },
  {
    id: 'technical-grid',
    name: '테크니컬 그리드',
    description: '체계적인 그리드 시스템과 모노크롬 컬러가 특징인 전문적인 디자인',
    color: 'bg-gray-700'
  },
  {
    id: 'creative-play',
    name: '크리에이티브 플레이',
    description: '과감한 색상과 동적인 요소가 특징인 창의적인 디자인',
    color: 'bg-pink-500'
  }
]

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            SSS Lab 웹사이트 테마
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            원하시는 테마를 선택해주세요
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {themes.map((theme) => (
            <Link 
              href={`/themes/${theme.id}`} 
              key={theme.id}
              className="group relative bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className={`h-32 ${theme.color}`} />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {theme.name}
                </h3>
                <p className="text-gray-600">
                  {theme.description}
                </p>
              </div>
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-500 rounded-lg transition-colors duration-300" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
