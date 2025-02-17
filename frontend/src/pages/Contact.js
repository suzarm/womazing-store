import { useForm } from "react-hook-form";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BreadCrumb from '../components/BreadCrumb';
import '../styles/Contact.css';

function Contact() {
  const { register,handleSubmit,formState: { errors }} = useForm();
  let count = 0; 

  const onSubmit = (data) => {
    console.log(data);
    count++;  
    console.log(errors);
  };

  return (
    <>
      <div className="wrapper">
        <Navbar />
        <BreadCrumb homelabel="Главная" pageName="Контакты" />
        <div className="section-main-card">Карта с любой точкой</div>
        <div className="section-main-card-content">
          <div className="container-tel">
            <p>Телефон</p>
            <p>+7 (495) 823-54-12</p>
          </div>
          <div className="container-e-mail">
            <p>E-mail</p>
            <p>info@sitename.com</p>
          </div>
          <div className="container-address">
            <p>Адрес</p>
            <p>г. Москва, 3-я улица Строителей, 25</p>
          </div>
        </div>
        <div className="section-form">
          <div className="section-main-title">Напишите нам</div>
          <form onSubmit={handleSubmit(onSubmit)} className="section-main-form">
            <label>Имя
              <input {...register("firstName", { required:"Это поле обязательно" })} />
            </label>
            {errors?.firstName && <p className="error-message">{errors?.firstName?.message || "Error"}</p>}

            <label>E-mail
              <input {...register("mail", { required:"Это поле обязательно", pattern:{
                    value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                    message: "Введите корректный e-mail"}})} />
            </label>
            {errors.mail && <p className="error-message">{errors.mail.message}</p>}
            <label>Телефон
              <input {...register("Телефон", { required:"Это поле обязательно", minLength:{ value:15, message:"Номер должен содержать минимум 15 символов" }  })} />
            </label>
            {errors?.Телефон && <p className="error-message">{errors?.Телефон?.message || "Error"}</p>}
            <label>Сообщение
              <input {...register("Сообщение", { required: true })} className="message-input"/>
            </label>
            <button className="form-btn" type="submit">Отправить</button>
          </form>
          <button className="contact-btn">Сообщение успешно отправлено</button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
