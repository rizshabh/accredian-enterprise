import { NextRequest, NextResponse } from 'next/server'

// In-memory store (replace with a real DB in production)
const leads: object[] = []

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    const { name, email, company, phone, teamSize, interest, message } = body

    if (!name || !email || !company) {
      return NextResponse.json(
        { error: 'name, email, and company are required' },
        { status: 400 }
      )
    }

    const lead = {
      id: Date.now().toString(),
      name,
      email,
      company,
      phone: phone || '',
      teamSize: teamSize || '',
      interest: interest || '',
      message: message || '',
      createdAt: new Date().toISOString(),
    }

    leads.push(lead)

    console.log('[Lead captured]', lead)

    return NextResponse.json(
      { success: true, message: 'Lead captured successfully', id: lead.id },
      { status: 201 }
    )
  } catch (err) {
    console.error('[Lead API error]', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function GET() {
  // Basic admin endpoint to view captured leads
  return NextResponse.json({ total: leads.length, leads })
}
