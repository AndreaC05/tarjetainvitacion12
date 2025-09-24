import "../style/Contenido.css";
import { Button } from "primereact/button";
import Musica from "./Musica";
import Calendario from "./Calendario";

export default function Contenido() {
  return (
    <>
      <div className="container_principal_contenido">
        <div className="header">
          <img
            src="https://res.cloudinary.com/dnao6nouz/image/upload/v1758723391/descarga_2_hfktye.jpg"
            alt=""
            className="foto_quinceañera"
          />
          <div className="roto_hoja">
            <img
              src="https://res.cloudinary.com/dnao6nouz/image/upload/v1758723761/hoja_xwhdv1.png"
              alt=""
            />
          </div>
          <div className="letras_header">
            <h1>Mis XV años</h1>
            <h2>Andrea Celeste</h2>
          </div>
        </div>
        <div className="reproductor_musica">
          <Musica />
        </div>
        <div className="corona">
          <img
            src="https://res.cloudinary.com/dnao6nouz/image/upload/v1758729721/image-removebg-preview_k4xcqo.png"
            alt=""
          />
        </div>
        <div className="dedicatoria">
          <p>
            Con la bendición de Dios y el amor de mis padres, Juan Torres y
            María López, tengo el honor de invitarles a celebrar mis XV años.
          </p>
        </div>
        <div className="padrinos">
          <div className="tit_padrinos">
            <img src="https://res.cloudinary.com/dnao6nouz/image/upload/v1758732602/image_62_qoqydm.svg" alt="" />
            <div className="text_padrinos">
              <h2>Padrinos</h2>
            </div>
          </div>
          <div className="padrinos_nombres">
            <p>Ana Gómez</p>
            <p>y</p>
            <p>Carlos Ruiz</p>
          </div>
        </div>
        <div className="calendario mt-5">
          <div className="tit_calendario">
            <img
              src="https://res.cloudinary.com/dnao6nouz/image/upload/v1758731422/image_61_vvbmjb.svg"
              alt=""
            />
            <div className="text_calendario">
              <h2>Reserva este día</h2>
            </div>
          </div>

          <Calendario />
        </div>
        <div className="recepcion_religiosa">
          <img
            src="https://res.cloudinary.com/dnao6nouz/image/upload/v1758727456/church_ysu9cq.svg"
            alt=""
          />
          <h5>Ceremonia</h5>
          <p>Parroquia Av. Circunvalacion</p>
          <p className="Hora">10:00 A.M.</p>
          <div className="buton_direccion mt-3">
            <a href="https://maps.app.goo.gl/8JVW2B5yPjbhDADKA" target="_blank">
              <Button label="Ver Ubicación" />
            </a>
          </div>
        </div>
        <div className="fiesta">
          <img
            src="https://res.cloudinary.com/dnao6nouz/image/upload/v1758728820/image_60_pvjjnr.svg"
            alt=""
          />
          <h5>Fiesta</h5>
          <p>Av. Circunvalacion</p>
          <p className="Hora">19:00 P.M.</p>
          <div className="buton_direccion mt-3">
            <a href="https://maps.app.goo.gl/8JVW2B5yPjbhDADKA" target="_blank">
              <Button label="Ver Ubicación" />
            </a>
          </div>
        </div>
        <div className="confirmar_asistencia">
          <i className="pi pi-whatsapp"></i>
          <h5>Confirma tu asistencia</h5>
          <div className="buton_direccion mt-3">
            <a
              href="https://wa.me/51950874416?text=Hola%20quiero%20confirmar%20mi%20asistencia%20a%20tu%20fiesta."
              target="_blank"
            >
              <Button label="Confirmar" />
            </a>
          </div>
        </div>
        <div className="vestimenta">
          <img src="https://res.cloudinary.com/dnao6nouz/image/upload/v1758732604/image_63_re7hei.svg" alt="" />
          <h5>Dress Code</h5>
          <p>Sport Elegante</p>
        </div>

        <div className="mensaje">
          <p>AMABLEMENTE, EL COLOR DORADO Y BLANCO UNICAMENTE PARA LA QUINCEAÑERA.</p>
        </div>
      </div>
    </>
  );
}
