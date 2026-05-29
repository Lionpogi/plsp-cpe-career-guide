import { NextResponse } from 'next/server';
import { query } from '@/app/lib/db'; 

// CRUCIAL: This must be explicitly exported so TypeScript recognizes the module
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { studentId, securityKey } = body;

    const cleanId = studentId?.trim();
    const cleanKey = securityKey?.trim();

    if (!cleanId || !cleanKey) {
      return NextResponse.json({ error: "Missing identity credentials." }, { status: 400 });
    }

    // Direct SQL Upsert to log entries into your local pgAdmin table
    const sqlText = `
      INSERT INTO users (student_id, security_key) 
      VALUES ($1, $2)
      ON CONFLICT (student_id) 
      DO UPDATE SET session_initialized_at = CURRENT_TIMESTAMP
      RETURNING *;
    `;

    const dbResult = await query(sqlText, [cleanId, cleanKey]);
    
    return NextResponse.json({ 
      success: true, 
      user: dbResult.rows[0] 
    });

  } catch (err: any) {
    console.error("PostgreSQL Core Connection Error:", err);
    return NextResponse.json({ error: "Database transmission failed." }, { status: 500 });
  }
}