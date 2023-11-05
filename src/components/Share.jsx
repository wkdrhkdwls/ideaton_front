import { Link } from "react-router-dom";
import Logo from "@assets/cukShare/csLogo.png";

const SharePage = () => {
  return (
    <div>
      <div className="lg:w-2/3 lg:mx-auto xl:w-2/3 xl:mx-auto">
        <div className="flex flex-row mt-40  sm:mx-3 md:mx-4 lg:mt-20 xl:mt-40">
          <div className="sm:w-1/2 sm:mb-10 w-1/2">
            <img src={Logo} alt={Logo} />
          </div>
          <div className="flex flex-col w-1/2  gap-5 sm:mt-0 sm:mx-2">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              convallis tortor risus, sed gravida nisl pharetra quis. Vivamus
              finibus commodo purus non iaculis. Nulla facilisi. In id mollis
              turpis. Vivamus volutpat scelerisque leo in egestas. Praesent
              iaculis risus sed ultrices dapibus. Nullam non metus eget ligula
              vestibulum iaculis in quis ex. Aliquam erat volutpat. Proin in
              enim augue. Morbi nisi risus, ullamcorper quis sem eget, fringilla
              lacinia mauris. Nam ac ornare diam. Nulla hendrerit, metus nec
              tempus ultrices, purus eros blandit nunc, ut mollis dui sapien
              commodo arcu. Duis vel eros metus. Praesent varius vel odio eu
              efficitur. Pellentesque habitant morbi tristique senectus et netus
              et malesuada fames ac turpis egestas. Nulla porttitor blandit
              rhoncus. Donec metus massa, pellentesque non ullamcorper euismod,
              semper sed massa. Sed euismod consequat lectus, varius viverra
              tellus fermentum nec. Pellentesque aliquam sapien hendrerit,
              lobortis quam et, mollis libero. Cras in facilisis elit. In ac
              porttitor elit. Integer sollicitudin aliquet leo viverra
              elementum. Donec congue sit amet felis ut viverra. Mauris
              dignissim augue vitae interdum consequat. Class aptent taciti
              sociosqu ad litora torquent per conubia nostra, per inceptos
              himenaeos. In dictum pulvinar dapibus. Donec faucibus malesuada
              sapien vitae faucibus. Curabitur sodales et augue in ultricies.
              Aenean id turpis fermentum, euismod mauris id, efficitur lorem.
              Proin vehicula ante a aliquam mattis. Pellentesque laoreet lorem
              urna. Etiam tristique ex sed metus tristique pretium. Quisque
              consequat enim eu massa posuere aliquet. Phasellus at enim mattis,
              fringilla ipsum at, ultrices neque. Duis tincidunt molestie
              finibus.
            </p>
            <div className="flex justify-center items-center p-6 bg-yellow-300 w-40">
              <Link to="/csproduct">자세히 보기</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SharePage;
