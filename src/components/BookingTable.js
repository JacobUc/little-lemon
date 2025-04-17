import { useState } from "react"
import Swal from "sweetalert2"
import "../css/booking-table.css"

export function BookingTable (props) {
  // Estado para cada campo del formulario
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    date: "",
    time: "",
    guests: "",
    occasion: "",
    specialRequests: "",
  })

  // Estado para errores de validación
  const [errors, setErrors] = useState({
    firstName: false,
    lastName: false,
    email: false,
    phoneNumber: false,
    date: false,
    time: false,
    guests: false,
    occasion: false,
  })

  // Manejar cambios en los inputs
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })

    // Limpiar error cuando el usuario comienza a escribir
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: false,
      })
    }
  }

  // Validar el formulario
  const validateForm = () => {
    const newErrors = {
      firstName: !formData.firstName,
      lastName: !formData.lastName,
      email: !formData.email || !/\S+@\S+\.\S+/.test(formData.email),
      phoneNumber: !formData.phoneNumber,
      date: !formData.date,
      time: !formData.time,
      guests: !formData.guests || Number.parseInt(formData.guests) <= 0,
      occasion: !formData.occasion,
    }

    setErrors(newErrors)
    return !Object.values(newErrors).some((error) => error)
  }

  // Manejar envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault()

    if (validateForm()) {
      // Mostrar alerta de éxito
      Swal.fire({
        title: "Booking Confirmed!",
        text: "Your table has been successfully booked",
        icon: "success",
        confirmButtonText: "Continue to Home",
      }).then(() => {
        // Redirect to index
        window.location.href = "/"
      })
    }
  }

  // Opciones para el select de ocasión
  const occasionOptions = [
    { value: "", label: "Select an occasion"},
    { value: "Birthday", label: "Birthday" },
    { value: "Anniversary", label: "Anniversary" },
    { value: "Business", label: "Business" },
    { value: "Other", label: "Other" },
  ]

  return (
    <section className="reservation-section">
      <div className="reservation-container">
        <h2 className="reservation-title">Reserve a Table</h2>

        <form onSubmit={handleSubmit} className="reservation-form">
          <p className="required-fields">* Required fields</p>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="firstName">
                First Name <span className="required">*</span>
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className={errors.firstName ? "error" : ""}
              />
              {errors.firstName && <span className="error-message">First name is required</span>}
            </div>

            <div className="form-group">
              <label htmlFor="lastName">
                Last Name <span className="required">*</span>
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className={errors.lastName ? "error" : ""}
              />
              {errors.lastName && <span className="error-message">Last name is required</span>}
            </div>
          </div>

          <div className="form-group full-width">
            <label htmlFor="email">
              Email <span className="required">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? "error" : ""}
            />
            {errors.email && <span className="error-message">Valid email is required</span>}
          </div>

          <div className="form-group full-width">
            <label htmlFor="phoneNumber">
              Phone Number <span className="required">*</span>
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className={errors.phoneNumber ? "error" : ""}
            />
            {errors.phoneNumber && <span className="error-message">Phone number is required</span>}
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="date">
                Date <span className="required">*</span>
              </label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className={errors.date ? "error" : ""}
              />
              {errors.date && <span className="error-message">Date is required</span>}
            </div>

            <div className="form-group">
              <label htmlFor="time">
                Time <span className="required">*</span>
              </label>

              {/* Generar opciones */}
              <select 
                id="time" 
                name="time" 
                value={formData.time} 
                onChange={handleChange}
                className={errors.time ? "error" : ""}
              >
                <option value="">Select a Time</option>
                {
                  props.availableTimes.availableTimes.map(time => {return <option key={time}>{time}</option>})
                }
              </select>
              {errors.time && <span className="error-message">Time is required</span>}
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="guests">
                Number of Guests <span className="required">*</span>
              </label>
              <input
                type="number"
                id="guests"
                name="guests"
                min="1"
                value={formData.guests}
                onChange={handleChange}
                className={errors.guests ? "error" : ""}
              />
              {errors.guests && <span className="error-message">Valid number of guests is required</span>}
            </div>

            <div className="form-group">
              <label htmlFor="occasion">
                Occasion <span className="required">*</span>
              </label>
              <select
                id="occasion"
                name="occasion"
                value={formData.occasion}
                onChange={handleChange}
                className={errors.occasion ? "error" : ""}
              >
                {occasionOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              {errors.occasion && <span className="error-message">Occasion is required</span>}
            </div>
          </div>

          <div className="form-group full-width">
            <label htmlFor="specialRequests">Special Requests (Optional)</label>
            <textarea
              id="specialRequests"
              name="specialRequests"
              value={formData.specialRequests}
              onChange={handleChange}
              placeholder="Please let us know if you have any dietary restrictions or special requests."
            />
          </div>

          <div className="submit-container">
            <button type="submit" className="reserve-button">
              Make Your Reservation
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

// export default ReservationForm
