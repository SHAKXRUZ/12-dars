import "./App.css";
import { useState, useEffect } from "react";
function App() {
  const [region, setRegion] = useState("Toshkent");

  function scrolFunc() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className="container">
      <p className="text">{region}</p>
      <div className="box">
        <p onClick={() => setRegion("Sirdaryo")}>Sirdaryo</p>
        <p onClick={() => setRegion("Samarqand")}>Samarqand</p>
        <p onClick={() => setRegion("Toshkent")}>Toshkent</p>
        <p onClick={() => setRegion("Sirdaryo")}>Sirdaryo</p>
        <p onClick={() => setRegion("Samarqand")}>Samarqand</p>
        <p onClick={() => setRegion("Toshkent")}>Toshkent</p>
        <p onClick={() => setRegion("Sirdaryo")}>Sirdaryo</p>
        <p onClick={() => setRegion("Samarqand")}>Samarqand</p>
        <p onClick={() => setRegion("Toshkent")}>Toshkent</p>
        <p onClick={() => setRegion("Sirdaryo")}>Sirdaryo</p>
        <p onClick={() => setRegion("Samarqand")}>Samarqand</p>
        <p onClick={() => setRegion("Toshkent")}>Toshkent</p>
      </div>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex, totam
      perferendis! Maiores quaerat quae et quibusdam vero. Eos quis ipsum
      exercitationem blanditiis officiis assumenda voluptatum aut expedita nam,
      id odit neque quae unde ab! Libero iure aliquam rerum natus. Excepturi
      nisi quae tempora atque, modi vel veniam eaque perferendis odio dolorum
      quas ducimus aperiam cumque, aliquid optio reiciendis earum omnis
      repudiandae eveniet numquam accusamus quaerat ab. Dolorum alias soluta
      commodi consectetur atque rerum quia quae, itaque omnis odio, cum enim
      accusantium sapiente. Error dolorem quas minima quae deserunt neque quasi
      ad magnam at? Facilis ullam aspernatur qui sint veniam? Nobis corporis
      explicabo nam magnam doloremque ipsum debitis praesentium consequatur
      autem sapiente odit nesciunt consectetur commodi voluptates nihil sunt
      architecto accusamus nulla alias eum, vel corrupti, quisquam quo cumque!
      Perspiciatis placeat vero id doloremque molestiae, harum debitis
      voluptatibus sit consequatur vel porro amet voluptatum dolorum dicta dolor
      tenetur repellendus aliquid. Nisi quod excepturi ipsa suscipit vero hic
      quos nesciunt facilis! Tenetur, non corrupti quos cumque similique,
      distinctio eius incidunt, magni nisi nihil aliquid sequi reiciendis. Fugit
      vitae veritatis quaerat rem ipsum eligendi doloribus aliquam nemo
      consectetur ipsam debitis voluptas, ut possimus beatae nesciunt officia
      dolore repudiandae soluta illo ex deleniti reprehenderit facilis? Beatae,
      ipsum eos? Officiis eius porro eos possimus numquam deleniti. Ea quibusdam
      quisquam quis expedita temporibus aut perspiciatis sint, ipsum hic, at,
      ipsa officiis? Nobis repudiandae, adipisci enim veniam eaque beatae
      exercitationem incidunt repellendus cumque similique aspernatur numquam
      est et nihil sapiente laborum corrupti. Nihil voluptatum magni, quas atque
      maxime magnam laborum. Vitae dolorem enim, laudantium vel facere
      accusantium suscipit distinctio voluptates reiciendis temporibus illum
      quod quas. Veniam nulla fugiat nisi ducimus mollitia veritatis dolorem
      labore illo omnis eligendi aliquam voluptates laborum assumenda odit
      expedita, voluptatibus iure suscipit odio beatae numquam quaerat
      perferendis! Id corrupti, aperiam hic nostrum natus vel corporis illum
      quae provident quas obcaecati aliquid! Modi blanditiis vel eveniet vero
      illum voluptatum, placeat aliquam, dolorum quia delectus perspiciatis
      dolores nesciunt? Facere eveniet reprehenderit autem non omnis veritatis,
      fuga repudiandae distinctio nam similique fugit quis incidunt doloremque
      quia libero eaque necessitatibus quasi ipsa earum. Asperiores suscipit ex
      deleniti nostrum, dolorem eos cupiditate, quibusdam porro possimus optio
      pariatur provident vero deserunt enim quas, voluptates beatae laudantium
      sunt voluptatum id tenetur facere! Est id blanditiis incidunt dolores
      debitis dolore corrupti quidem, consequuntur exercitationem ut porro
      pariatur! Consequuntur ipsa corporis esse vero perspiciatis fuga nemo
      expedita est illum culpa assumenda quasi sunt exercitationem itaque
      voluptatum tempore fugit ad, asperiores recusandae soluta. Sit, sed!
      Molestias ratione fugit cumque eum porro. Eaque iusto totam earum
      distinctio! Eius nesciunt deserunt minima repellendus repellat vero, sit
      nostrum asperiores harum obcaecati quisquam reiciendis magni? Atque iusto
      quam deserunt, eos amet possimus ab repudiandae libero nulla placeat
      laboriosam assumenda rem adipisci delectus hic quos debitis quia
      consequatur vitae laudantium est qui voluptates. Architecto aut facilis
      quis omnis explicabo sit obcaecati, odit minus! Beatae, velit. Laboriosam,
      ea architecto? Est voluptatem sapiente dolores quae, mollitia dignissimos
      nostrum eos illum, quibusdam sit voluptatibus odit? Consectetur
      dignissimos repellat illum omnis rem voluptate asperiores eaque optio,
      pariatur ad officia recusandae magnam laudantium, suscipit eius? Unde
      dignissimos voluptas recusandae quis tempore libero dolorum quisquam velit
      blanditiis similique. Rem, aperiam repellendus! Quaerat, accusamus harum.
      Illum ut totam labore, voluptatum ducimus veniam eaque ex at dolorem
      possimus repellendus accusamus minus sunt, voluptate numquam quibusdam non
      porro dicta aperiam, molestias vitae. Ipsam aperiam itaque nam iure vitae
      iste et repudiandae saepe recusandae libero culpa dolores mollitia ab,
      minima, at voluptatibus vel quasi molestiae aliquid voluptas fugiat sunt!
      Nulla corporis voluptates enim odit et laborum sequi ex officiis alias
      illo debitis quas maxime quod labore nesciunt cumque sapiente recusandae
      libero obcaecati, sit provident exercitationem maiores? Debitis magni
      pariatur ipsum est rerum, dicta vitae, amet repellat quibusdam eum
      deleniti minus aut nihil eaque quis optio praesentium. Accusamus assumenda
      deserunt quo laboriosam numquam! Odio officia voluptate, eaque vero
      praesentium in voluptatum sint, esse, numquam earum magnam quod! Ullam
      dolores voluptates, hic suscipit fugiat, beatae ut recusandae dolorum eos
      omnis, doloribus quisquam aut amet quas alias dolor nihil numquam ab
      laboriosam. Beatae ratione, magni, illo explicabo blanditiis harum quos
      officia labore saepe recusandae deserunt natus qui facere, nihil eius
      optio reiciendis eligendi soluta tempora cum esse rerum atque pariatur?
      Deleniti veritatis eos natus earum alias hic nulla, sapiente quibusdam
      delectus explicabo quod animi. Saepe quam dolore rerum laboriosam laborum
      nam similique quia, qui quisquam quo nemo ea fuga consectetur beatae
      veritatis! In reprehenderit sequi necessitatibus eveniet odit dolore harum
      iusto ipsam quod magnam error quos exercitationem ut aliquid sapiente
      molestiae ex saepe, cumque id! Laudantium recusandae enim, provident
      ratione mollitia consectetur cupiditate aliquam! Dignissimos, debitis
      aperiam nihil facilis quaerat alias maxime deleniti dolor, omnis et ipsum
      cumque veritatis magni officiis tempore eum at autem praesentium. Mollitia
      nemo placeat amet nisi, excepturi exercitationem eveniet voluptatibus
      perspiciatis, officiis assumenda harum quo repellat deserunt itaque
      eligendi nulla non esse quod soluta delectus facere voluptas. Quibusdam
      nemo alias dolores voluptates in esse molestiae molestias, maiores
      laudantium beatae dolorem nulla excepturi repudiandae eius quas eveniet
      omnis optio corrupti magni sed nam minus distinctio quos? Ea non corporis
      aliquid voluptatem nemo atque assumenda, possimus asperiores ullam ratione
      repellendus, nesciunt voluptas, officiis aspernatur! Earum esse ratione
      consequuntur delectus quam dolore, modi quod incidunt numquam officiis
      optio deleniti velit maiores accusamus pariatur tempore iusto recusandae.
      Eum maxime, sit ab in minima, aliquid modi magni aperiam neque rem
      temporibus. Nihil illum, rerum omnis accusamus tenetur non, quia molestiae
      ex saepe ipsa est eaque veritatis in illo recusandae inventore quasi
      officiis nesciunt earum sed. Veniam officia dignissimos vitae minima!
      Incidunt ex eum nobis nesciunt voluptatem, sequi nostrum consequuntur
      officiis distinctio error natus doloremque in ipsum, veritatis voluptates
      molestias! Eligendi, incidunt sint voluptates atque veritatis animi autem
      ab eos esse. Cupiditate beatae voluptatibus nulla ad quo sequi a vel sit?
      Ea maiores molestiae sit iure assumenda exercitationem ipsam harum.
      Ducimus quisquam similique perferendis ipsa animi id culpa temporibus enim
      reprehenderit? Dicta molestias commodi quis, mollitia sed id quisquam
      pariatur vitae esse error dolor recusandae enim quam omnis magni
      reprehenderit! Dolorem, aperiam?
      <button className="btn" onClick={() => scrolFunc()}>
        Click
      </button>
    </div>
  );
}

export default App;
