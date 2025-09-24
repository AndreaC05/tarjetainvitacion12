import Contenido from "../components/Contenido";
import "../style/Home.css";

export default function Home() {
  return (
    <>
      <div className="container_home">
        <img
          className="video-background"
          src="https://res.cloudinary.com/dnao6nouz/image/upload/v1758723142/descarga_1_wsmzrv.jpg"
        />

        {/* Video principal normal */}
        <img
          className="video-main"
          src="https://res.cloudinary.com/dnao6nouz/image/upload/v1758723142/descarga_1_wsmzrv.jpg"
        />
        <div className="contenido_text">
          <Contenido />
        </div>
      </div>
    </>
  );
}