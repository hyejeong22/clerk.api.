import { NextResponse } from 'next/server'
import { v4 as uuidv4 } from 'uuid'
import courses from './data.json'

export async function GET() {
  return NextResponse.json(courses)
}

export async function POST(request: Request) {
  const { title, description, level, link } = await request.json()

  const newCourse = {
    id: uuidv4(),
    title,
    description,
    level,
    link,
  }

  // 이 부분은 파일에 데이터를 영구 저장하지 않음. 데이터베이스를 고려하세요.
  courses.push(newCourse)

  return NextResponse.json(courses)
}
