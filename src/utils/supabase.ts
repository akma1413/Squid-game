import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// 환경 변수가 있을 때만 Supabase 클라이언트 생성
export const supabase = supabaseUrl && supabaseAnonKey 
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

// 지원자 데이터 타입
export interface ApplicationData {
  name?: string;
  email: string;
  phone: string;
}

// 지원자 데이터 저장 함수
export async function submitApplication(data: ApplicationData) {
  if (!supabase) {
    return { success: false, error: 'Supabase 클라이언트가 초기화되지 않았습니다.' };
  }

  try {
    const { data: result, error } = await supabase
      .from('applications')
      .insert([data])
      .select()
      .single();

    if (error) {
      throw error;
    }

    return { success: true, data: result };
  } catch (error) {
    console.error('Error submitting application:', error);
    return { success: false, error };
  }
}

// 모든 지원자 데이터 조회 함수 (관리자용)
export async function getAllApplications() {
  if (!supabase) {
    return { success: false, error: 'Supabase 클라이언트가 초기화되지 않았습니다.' };
  }

  try {
    const { data, error } = await supabase
      .from('applications')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      throw error;
    }

    return { success: true, data };
  } catch (error) {
    console.error('Error fetching applications:', error);
    return { success: false, error };
  }
}

// 지원자 상태 업데이트 함수 (관리자용)
export async function updateApplicationStatus(id: number, status: 'pending' | 'approved' | 'rejected') {
  if (!supabase) {
    return { success: false, error: 'Supabase 클라이언트가 초기화되지 않았습니다.' };
  }

  try {
    const { data, error } = await supabase
      .from('applications')
      .update({ status, updated_at: new Date().toISOString() })
      .eq('id', id)
      .select()
      .single();

    if (error) {
      throw error;
    }

    return { success: true, data };
  } catch (error) {
    console.error('Error updating application status:', error);
    return { success: false, error };
  }
}
