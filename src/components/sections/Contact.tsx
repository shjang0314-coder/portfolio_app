'use client';

import { Section } from '../Section';
import { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = '이름을 입력해주세요.';
    }

    if (!formData.email.trim()) {
      newErrors.email = '이메일을 입력해주세요.';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = '올바른 이메일 형식이 아닙니다.';
    }

    if (!formData.message.trim()) {
      newErrors.message = '메시지를 입력해주세요.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = '메시지는 최소 10자 이상이어야 합니다.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // 실제 API 엔드포인트로 교체 필요
      // await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData),
      // });

      // 시뮬레이션
      await new Promise(resolve => setTimeout(resolve, 1000));

      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      // 3초 후 성공 메시지 숨김
      setTimeout(() => setSubmitStatus('idle'), 3000);
    } catch (error) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // 입력 시 해당 필드의 에러 제거
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <Section id="contact" title="Get In Touch" subtitle="연락하기">
      <div className="max-w-2xl mx-auto">
        <p className="text-center text-lg text-[var(--color-text-secondary)] mb-12">
          프로젝트 문의나 협업 제안이 있으시면 언제든 연락주세요.
          <br />
          24시간 내에 답변드리겠습니다.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* 이름 */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-[var(--color-text-primary)] mb-2"
            >
              이름 *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-4 py-3 bg-[var(--color-background)] border rounded-lg text-[var(--color-text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] transition-all ${
                errors.name ? 'border-red-500' : 'border-[var(--color-border)]'
              }`}
              placeholder="홍길동"
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-500">{errors.name}</p>
            )}
          </div>

          {/* 이메일 */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-[var(--color-text-primary)] mb-2"
            >
              이메일 *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-3 bg-[var(--color-background)] border rounded-lg text-[var(--color-text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] transition-all ${
                errors.email ? 'border-red-500' : 'border-[var(--color-border)]'
              }`}
              placeholder="your@email.com"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-500">{errors.email}</p>
            )}
          </div>

          {/* 메시지 */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-[var(--color-text-primary)] mb-2"
            >
              메시지 *
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={6}
              className={`w-full px-4 py-3 bg-[var(--color-background)] border rounded-lg text-[var(--color-text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] transition-all resize-none ${
                errors.message ? 'border-red-500' : 'border-[var(--color-border)]'
              }`}
              placeholder="프로젝트나 협업에 대해 자유롭게 작성해주세요."
            />
            {errors.message && (
              <p className="mt-1 text-sm text-red-500">{errors.message}</p>
            )}
          </div>

          {/* 제출 버튼 */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full px-8 py-4 bg-[var(--color-primary)] text-white rounded-xl font-semibold text-lg hover:bg-[var(--color-primary-dark)] transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? '전송 중...' : '메시지 보내기'}
          </button>

          {/* 상태 메시지 */}
          {submitStatus === 'success' && (
            <div className="p-4 bg-green-100 dark:bg-green-900/20 border border-green-500 rounded-lg text-green-700 dark:text-green-400 text-center">
              메시지가 성공적으로 전송되었습니다! 곧 연락드리겠습니다.
            </div>
          )}
          {submitStatus === 'error' && (
            <div className="p-4 bg-red-100 dark:bg-red-900/20 border border-red-500 rounded-lg text-red-700 dark:text-red-400 text-center">
              전송 중 오류가 발생했습니다. 다시 시도해주세요.
            </div>
          )}
        </form>

        {/* 추가 연락 방법 */}
        <div className="mt-12 pt-12 border-t border-[var(--color-border)] text-center">
          <p className="text-sm text-[var(--color-text-tertiary)] mb-4">
            또는 직접 연락주세요
          </p>
          <a
            href="mailto:contact@example.com"
            className="text-lg font-medium text-[var(--color-primary)] hover:text-[var(--color-primary-dark)] transition-colors"
          >
            contact@example.com
          </a>
        </div>
      </div>
    </Section>
  );
}


