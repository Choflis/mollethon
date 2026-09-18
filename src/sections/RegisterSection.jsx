import React, { useState } from 'react';
import { submitRegistration } from '../lib/apiMock';

export default function RegisterSection() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    city: 'Mollendo',
    age: '',
    occupation: '',
    interestArea: 'Desarrollo de Software',
    experienceLevel: 'Intermedio',
    participationType: 'individual',
    teamName: '',
    teamSize: '3',
    motivation: '',
    termsAccepted: false,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(null);
  const [apiError, setApiError] = useState(null);

  const validateField = (name, value) => {
    let error = '';
    if (name === 'fullName' && !value.trim()) {
      error = 'Por favor, ingresa tus nombres y apellidos.';
    } else if (name === 'email') {
      if (!value.trim()) {
        error = 'El correo electrónico es obligatorio.';
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        error = 'Ingresa un correo electrónico válido (ej. usuario@dominio.com).';
      }
    } else if (name === 'phone') {
      const clean = value.replace(/[\s\-()]/g, '');
      if (!clean) {
        error = 'El número de celular es obligatorio.';
      } else if (!/^\+?\d{8,15}$/.test(clean)) {
        error = 'Ingresa un número de celular válido (mínimo 9 dígitos).';
      }
    } else if (name === 'age') {
      const num = parseInt(value, 10);
      if (!value) {
        error = 'Ingresa tu edad.';
      } else if (isNaN(num) || num < 14 || num > 90) {
        error = 'La edad debe estar entre 14 y 90 años.';
      }
    } else if (name === 'occupation' && !value.trim()) {
      error = 'Indica tu ocupación, universidad o colegio.';
    } else if (name === 'teamName' && formData.participationType === 'equipo' && !value.trim()) {
      error = 'Por favor, ingresa el nombre de tu equipo.';
    } else if (name === 'termsAccepted' && !value) {
      error = 'Debes aceptar los términos y el tratamiento de datos.';
    }
    return error;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === 'checkbox' ? checked : value;

    setFormData((prev) => ({ ...prev, [name]: val }));

    if (errors[name]) {
      const fieldErr = validateField(name, val);
      setErrors((prev) => ({ ...prev, [name]: fieldErr }));
    }
  };

  const handleBlur = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === 'checkbox' ? checked : value;
    const err = validateField(name, val);
    setErrors((prev) => ({ ...prev, [name]: err }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setApiError(null);

    // Validate all fields
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      const err = validateField(key, formData[key]);
      if (err) newErrors[key] = err;
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      // Focus first erroneous field
      const firstKey = Object.keys(newErrors)[0];
      document.getElementById(`input-${firstKey}`)?.focus();
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await submitRegistration(formData);
      if (response.success) {
        setSubmitSuccess(response.data);
      } else {
        setApiError(response.error || 'Hubo un error al procesar el registro.');
      }
    } catch (err) {
      setApiError('Error de red. Por favor verifica tu conexión e intenta de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setSubmitSuccess(null);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      city: 'Mollendo',
      age: '',
      occupation: '',
      interestArea: 'Desarrollo de Software',
      experienceLevel: 'Intermedio',
      participationType: 'individual',
      teamName: '',
      teamSize: '3',
      motivation: '',
      termsAccepted: false,
    });
    setErrors({});
  };

  return (
    <section id="registro" className="section register-section">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title">
            Inscripción Oficial
          </h2>
          <p className="section-subtitle">
            Asegura tu lugar en la primera edición de la Innovathon Mollendo. Participación 100% gratuita.
          </p>
        </div>

        <div className="register-card-wrapper">
          {submitSuccess ? (
            /* Success State with Water Ripple Animation */
            <div id="register-success-state" className="success-card card-marine" aria-live="polite">
              <div className="success-water-pulse">
                <span className="success-icon-symbol">✓</span>
              </div>
              <h3 className="success-title">¡Registro Completado con Éxito!</h3>
              <p className="success-greeting">
                Bienvenido/a a bordo, <strong>{submitSuccess.registeredName}</strong>.
              </p>
              <p className="success-details">
                Hemos recibido tu postulación {submitSuccess.participationType === 'equipo' ? `con el equipo "${submitSuccess.teamName}"` : 'en modalidad individual'}.
                Enviaremos todos los accesos e instrucciones detalladas a <strong>{submitSuccess.registeredEmail}</strong>.
              </p>
              <div className="success-ticket-chip">
                <span>Código de Registro:</span>
                <strong>{submitSuccess.registrationId}</strong>
              </div>
              <button
                id="btn-register-another"
                onClick={handleReset}
                className="btn btn-secondary success-reset-btn"
              >
                Inscribir a otra persona
              </button>
            </div>
          ) : (
            /* Main Interactive Registration Form */
            <form id="registration-form" className="register-form card-marine" onSubmit={handleSubmit} noValidate>
              {apiError && (
                <div className="form-alert-error" role="alert">
                  <span>⚠️</span>
                  <span>{apiError}</span>
                </div>
              )}

              {/* Row 1: Nombres y Correo */}
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="input-fullName" className="form-label">
                    Nombres y Apellidos <span className="req-star">*</span>
                  </label>
                  <input
                    type="text"
                    id="input-fullName"
                    name="fullName"
                    className={`form-input ${errors.fullName ? 'input-error' : ''}`}
                    placeholder="Ej. Camila Valdivia"
                    value={formData.fullName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    aria-invalid={!!errors.fullName}
                    aria-describedby={errors.fullName ? 'err-fullName' : undefined}
                    required
                  />
                  {errors.fullName && (
                    <span id="err-fullName" className="form-error-msg">{errors.fullName}</span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="input-email" className="form-label">
                    Correo Electrónico <span className="req-star">*</span>
                  </label>
                  <input
                    type="email"
                    id="input-email"
                    name="email"
                    className={`form-input ${errors.email ? 'input-error' : ''}`}
                    placeholder="ejemplo@correo.com"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? 'err-email' : undefined}
                    required
                  />
                  {errors.email && (
                    <span id="err-email" className="form-error-msg">{errors.email}</span>
                  )}
                </div>
              </div>

              {/* Row 2: Celular, Ciudad y Edad */}
              <div className="form-row form-row-3">
                <div className="form-group">
                  <label htmlFor="input-phone" className="form-label">
                    Celular / WhatsApp <span className="req-star">*</span>
                  </label>
                  <input
                    type="tel"
                    id="input-phone"
                    name="phone"
                    className={`form-input ${errors.phone ? 'input-error' : ''}`}
                    placeholder="987 654 321"
                    value={formData.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    aria-invalid={!!errors.phone}
                    aria-describedby={errors.phone ? 'err-phone' : undefined}
                    required
                  />
                  {errors.phone && (
                    <span id="err-phone" className="form-error-msg">{errors.phone}</span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="input-city" className="form-label">
                    Ciudad de Residencia <span className="req-star">*</span>
                  </label>
                  <input
                    type="text"
                    id="input-city"
                    name="city"
                    className="form-input"
                    placeholder="Mollendo / Arequipa / Otra"
                    value={formData.city}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="input-age" className="form-label">
                    Edad <span className="req-star">*</span>
                  </label>
                  <input
                    type="number"
                    id="input-age"
                    name="age"
                    min="14"
                    max="90"
                    className={`form-input ${errors.age ? 'input-error' : ''}`}
                    placeholder="Ej. 21"
                    value={formData.age}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    aria-invalid={!!errors.age}
                    aria-describedby={errors.age ? 'err-age' : undefined}
                    required
                  />
                  {errors.age && (
                    <span id="err-age" className="form-error-msg">{errors.age}</span>
                  )}
                </div>
              </div>

              {/* Row 3: Ocupación e Interés */}
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="input-occupation" className="form-label">
                    Ocupación o Institución <span className="req-star">*</span>
                  </label>
                  <input
                    type="text"
                    id="input-occupation"
                    name="occupation"
                    className={`form-input ${errors.occupation ? 'input-error' : ''}`}
                    placeholder="Universidad / Colegio / Empresa"
                    value={formData.occupation}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    aria-invalid={!!errors.occupation}
                    aria-describedby={errors.occupation ? 'err-occupation' : undefined}
                    required
                  />
                  {errors.occupation && (
                    <span id="err-occupation" className="form-error-msg">{errors.occupation}</span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="input-interestArea" className="form-label">
                    Área Principal de Aporte
                  </label>
                  <select
                    id="input-interestArea"
                    name="interestArea"
                    className="form-select"
                    value={formData.interestArea}
                    onChange={handleChange}
                  >
                    <option value="Desarrollo de Software">Desarrollo de Software & Código</option>
                    <option value="Diseño UI/UX & Producto">Diseño UI/UX & Prototipado</option>
                    <option value="Innovación Marina & Sostenibilidad">Innovación Marina & Sostenibilidad</option>
                    <option value="Negocios & Pitching">Negocios, Estrategia & Pitching</option>
                    <option value="Hardware & IoT">Hardware, Robótica & IoT</option>
                  </select>
                </div>
              </div>

              {/* Row 4: Modalidad de Participación */}
              <div className="form-group">
                <label className="form-label">Modalidad de Participación</label>
                <div className="participation-options">
                  <label className={`radio-card ${formData.participationType === 'individual' ? 'radio-card-active' : ''}`}>
                    <input
                      type="radio"
                      name="participationType"
                      value="individual"
                      checked={formData.participationType === 'individual'}
                      onChange={handleChange}
                      className="radio-hidden"
                    />
                    <span className="radio-dot" />
                    <div>
                      <strong className="radio-title">Individual</strong>
                      <p className="radio-desc">Te ayudaremos a integrarte a un equipo en el Team Matching inicial.</p>
                    </div>
                  </label>

                  <label className={`radio-card ${formData.participationType === 'equipo' ? 'radio-card-active' : ''}`}>
                    <input
                      type="radio"
                      name="participationType"
                      value="equipo"
                      checked={formData.participationType === 'equipo'}
                      onChange={handleChange}
                      className="radio-hidden"
                    />
                    <span className="radio-dot" />
                    <div>
                      <strong className="radio-title">En Equipo</strong>
                      <p className="radio-desc">Ya tienes un equipo formado (3 a 5 integrantes).</p>
                    </div>
                  </label>
                </div>
              </div>

              {/* Conditional Team Details (Only shown if 'equipo' selected) */}
              {formData.participationType === 'equipo' && (
                <div id="team-conditional-block" className="conditional-box">
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="input-teamName" className="form-label">
                        Nombre del Equipo <span className="req-star">*</span>
                      </label>
                      <input
                        type="text"
                        id="input-teamName"
                        name="teamName"
                        className={`form-input ${errors.teamName ? 'input-error' : ''}`}
                        placeholder="Ej. OlaTech Mollendo"
                        value={formData.teamName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        aria-invalid={!!errors.teamName}
                        aria-describedby={errors.teamName ? 'err-teamName' : undefined}
                        required
                      />
                      {errors.teamName && (
                        <span id="err-teamName" className="form-error-msg">{errors.teamName}</span>
                      )}
                    </div>

                    <div className="form-group">
                      <label htmlFor="input-teamSize" className="form-label">
                        Número de Integrantes
                      </label>
                      <select
                        id="input-teamSize"
                        name="teamSize"
                        className="form-select"
                        value={formData.teamSize}
                        onChange={handleChange}
                      >
                        <option value="3">3 integrantes</option>
                        <option value="4">4 integrantes</option>
                        <option value="5">5 integrantes (máximo)</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {/* Motivation textarea */}
              <div className="form-group">
                <label htmlFor="input-motivation" className="form-label">
                  ¿Qué esperas aprender o aportar en la Innovathon? (Opcional)
                </label>
                <textarea
                  id="input-motivation"
                  name="motivation"
                  rows="3"
                  className="form-textarea"
                  placeholder="Cuéntanos brevemente sobre tu proyecto soñado o lo que te motiva a transformar Mollendo..."
                  value={formData.motivation}
                  onChange={handleChange}
                />
              </div>

              {/* Terms Checkbox */}
              <div className="form-group">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    id="input-termsAccepted"
                    name="termsAccepted"
                    checked={formData.termsAccepted}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    aria-invalid={!!errors.termsAccepted}
                    aria-describedby={errors.termsAccepted ? 'err-termsAccepted' : undefined}
                    required
                  />
                  <span>
                    Acepto el código de conducta de la Innovathon Mollendo y el tratamiento de mis datos de contacto para fines de coordinación del evento.
                  </span>
                </label>
                {errors.termsAccepted && (
                  <span id="err-termsAccepted" className="form-error-msg block-err">
                    {errors.termsAccepted}
                  </span>
                )}
              </div>

              {/* Submit Button with Loading State */}
              <button
                type="submit"
                id="btn-submit-registration"
                disabled={isSubmitting}
                className="btn btn-primary btn-submit-form"
              >
                {isSubmitting ? (
                  <>
                    <span className="submit-spinner" aria-hidden="true" />
                    <span>Enviando postulación...</span>
                  </>
                ) : (
                  <>
                    <span>Confirmar mi inscripción</span>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>

      <style>{`
        .register-section {
          background-color: var(--color-navy);
          position: relative;
        }
        .register-card-wrapper {
          max-width: 820px;
          margin: 0 auto;
        }
        .register-form {
          padding: 2.5rem;
          border-radius: var(--radius-xl);
          border-color: var(--color-border-marine);
          box-shadow: var(--shadow-lg);
          background: var(--color-form-bg);
        }
        .form-row {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.25rem;
          margin-bottom: 1.25rem;
        }
        @media (min-width: 640px) {
          .form-row {
            grid-template-columns: 1fr 1fr;
          }
          .form-row-3 {
            grid-template-columns: 1fr 1fr 120px;
          }
        }
        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.45rem;
          margin-bottom: 1.25rem;
        }
        .form-label {
          font-size: 0.88rem;
          font-weight: 700;
          color: var(--color-text-main);
        }
        .req-star {
          color: var(--color-coral);
        }
        .form-input, .form-select, .form-textarea {
          width: 100%;
          padding: 0.85rem 1.15rem;
          background-color: var(--color-navy);
          border: 1.5px solid rgba(255, 255, 255, 0.12);
          border-radius: var(--radius-md);
          color: var(--color-text-main);
          font-family: var(--font-body);
          font-size: 0.95rem;
          transition: border-color 200ms var(--ease-out), box-shadow 200ms var(--ease-out);
        }
        .form-input:focus, .form-select:focus, .form-textarea:focus {
          outline: none;
          border-color: var(--color-aqua);
          box-shadow: 0 0 0 3px rgba(3, 196, 197, 0.2);
        }
        .input-error {
          border-color: var(--color-coral) !important;
        }
        .form-error-msg {
          font-size: 0.8rem;
          color: var(--color-coral);
          font-weight: 600;
        }
        .block-err {
          display: block;
          margin-top: 0.35rem;
        }
        .form-alert-error {
          background: rgba(252, 108, 145, 0.15);
          border: 1px solid var(--color-coral);
          padding: 1rem 1.25rem;
          border-radius: var(--radius-md);
          color: #ffffff;
          margin-bottom: 1.5rem;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 0.92rem;
        }
        .participation-options {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1rem;
        }
        @media (min-width: 600px) {
          .participation-options {
            grid-template-columns: 1fr 1fr;
          }
        }
        .radio-card {
          display: flex;
          align-items: flex-start;
          gap: 0.85rem;
          padding: 1.15rem;
          background: var(--color-navy);
          border: 1.5px solid var(--color-border);
          border-radius: var(--radius-md);
          cursor: pointer;
          transition: all 180ms ease;
        }
        .radio-card:hover {
          border-color: var(--color-border-marine);
        }
        .radio-card-active {
          border-color: var(--color-aqua);
          background: #081d45;
        }
        .radio-hidden {
          position: absolute;
          opacity: 0;
        }
        .radio-dot {
          width: 18px;
          height: 18px;
          border-radius: 50%;
          border: 2px solid var(--color-text-subtle);
          margin-top: 2px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .radio-card-active .radio-dot {
          border-color: var(--color-aqua);
        }
        .radio-card-active .radio-dot::after {
          content: '';
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--color-aqua);
        }
        .radio-title {
          display: block;
          font-size: 0.95rem;
          color: var(--color-text-main);
          margin-bottom: 0.2rem;
        }
        .radio-desc {
          font-size: 0.8rem;
          color: var(--color-text-muted);
          line-height: 1.35;
        }
        .conditional-box {
          background: rgba(3, 196, 197, 0.05);
          border: 1px dashed var(--color-aqua);
          border-radius: var(--radius-md);
          padding: 1.25rem 1.25rem 0.25rem;
          margin-bottom: 1.25rem;
        }
        .checkbox-label {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          font-size: 0.85rem;
          color: var(--color-text-muted);
          cursor: pointer;
          line-height: 1.5;
        }
        .checkbox-label input {
          margin-top: 4px;
          accent-color: var(--color-aqua);
          width: 16px;
          height: 16px;
          cursor: pointer;
        }
        .btn-submit-form {
          width: 100%;
          padding: 1.15rem;
          font-size: 1.05rem;
          margin-top: 1rem;
        }
        .submit-spinner {
          width: 18px;
          height: 18px;
          border: 2px solid rgba(3, 12, 31, 0.3);
          border-top-color: var(--color-navy);
          border-radius: 50%;
          animation: spin 700ms linear infinite;
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        /* Success Card Styling */
        .success-card {
          text-align: center;
          padding: 4rem 2rem;
          border-radius: var(--radius-xl);
          border: 2px solid var(--color-aqua);
          box-shadow: 0 0 50px rgba(3, 196, 197, 0.25);
          display: flex;
          flex-direction: column;
          align-items: center;
          background: var(--color-form-bg);
        }
        .success-water-pulse {
          width: 72px;
          height: 72px;
          border-radius: 50%;
          background: var(--color-aqua);
          color: var(--color-navy);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2.25rem;
          font-weight: 800;
          margin-bottom: 1.75rem;
          box-shadow: 0 0 0 12px rgba(3, 196, 197, 0.25);
          animation: waterPulse 2.5s infinite;
        }
        .success-title {
          font-size: 2rem;
          margin-bottom: 0.75rem;
          color: var(--color-text-main);
        }
        .success-greeting {
          font-size: 1.15rem;
          color: var(--color-aqua);
          margin-bottom: 1rem;
        }
        .success-details {
          max-width: 50ch;
          color: var(--color-text-muted);
          margin-bottom: 2rem;
          font-size: 0.95rem;
          line-height: 1.6;
        }
        .success-ticket-chip {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.75rem 1.5rem;
          border-radius: var(--radius-full);
          background: rgba(184, 218, 2, 0.1);
          border: 1px solid var(--color-lime);
          color: var(--color-lime);
          font-size: 0.9rem;
          margin-bottom: 2.5rem;
        }
        .success-ticket-chip strong {
          font-family: var(--font-display);
          letter-spacing: 0.05em;
          font-size: 1.1rem;
        }
      `}</style>
    </section>
  );
}
