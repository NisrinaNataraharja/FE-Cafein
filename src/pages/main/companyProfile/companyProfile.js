import React, { useEffect } from "react";
import Navbar from "../../../components/Module/navbar/index";
import styles from "./companyProfile.module.css";
import ava from "./img/fotoprofile.png";
import Footer from "../../../components/Module/footer/index";
import { Button } from "../../../components/index";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getCompanyById } from "../../../config/redux/actions/companyAction";

const CompanyProfile = () => {
  // const [show, setShow] = useState(true);
  const { companyId } = useSelector((state) => state.company);
  const dispatch = useDispatch();
  console.log(companyId);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const id = localStorage.getItem("id");
    const formData = new FormData();
    formData.append("id", id);
    dispatch(getCompanyById(formData, token));
  }, []);

  return (
    <div>
      <Navbar />
      <main>
        <div className="container-fluid bg-light">
          <div className="container position-relative mt-5">
            <div className="row position-relative">
              <div className={"col " + styles.bg_image}>
                <button className={styles.btnInput}>Ubah latar</button>
              </div>
            </div>
            <div className="row">
              <div className={"col position-relative bg-white"}>
                <div className={styles.ava}>
                  <img src={companyId.profileimage ? companyId.profileimage : ava} alt="" />
                </div>
                <div className={"row flex-column " + styles.dt_profile}>
                  <div className="col">
                    <h5>{companyId.companyname}</h5>
                    <p>{companyId.jobfield}</p>
                    <p>{companyId.companyaddress}</p>
                    <div className="row d-flex justify-content-center">
                      <div className="col-6">
                        <p>{companyId.description}</p>
                      </div>
                    </div>
                    <Link to="/editCompany">
                      <Button btn="btnHire" title="Edit profile"></Button>
                    </Link>
                  </div>
                </div>
                <div className={styles.contact}>
                  <div className="col-3 mt-5 ">
                    <div className="table table-borderless ">
                      <tr>
                        <td>
                          <div className="mt-1">
                            <i className="bi bi-envelope"></i>
                          </div>
                        </td>
                        <td>
                          <p className="mt-1">{companyId.emailcompany}</p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="mt-1">
                            <i className="bi bi-instagram"></i>
                          </div>
                        </td>
                        <td>
                          <p className="mt-1">{companyId.instagram}</p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="mt-1">
                            <i className="bi bi-telephone"></i>
                          </div>
                        </td>
                        <td>
                          <p className="mt-1">{companyId.companyphone}</p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="mt-1">
                            <i className="bi bi-linkedin"></i>
                          </div>
                        </td>
                        <td>
                          <p className="mt-1">{companyId.linkedin}</p>
                        </td>
                      </tr>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer className="px-5 py-2"></Footer>
    </div>
  );
};

export default CompanyProfile;
