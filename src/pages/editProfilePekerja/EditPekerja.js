import React, { useState } from "react";
// import Card from "../../components/Base/card";
import CardAlter from "../../components/Base/CardAlter";
import Navbar from "../../components/Module/navbar";
import styles from "./editpekerja.module.css";
import ava from "./img/ava.png";
import ButtonAlter from "../../components/Base/ButtonAlter";
import Label from "../../components/Base/Label";
import Input from "../../components/Base/Input";
import Footer from "../../components/Module/footer";
import portoImg from "./img/backimg.PNG";
import { addnewSkill, addPortofolio, addWorkExperience, editDataDiri } from "../../config/redux/actions/pekerjaAction";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// import Swal from "sweetalert2";

const EditPekerja = () => {
  // const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loginProfile } = useSelector((state) => state.pekerja);

  // dataDiri
  const [dataProfile, setDataProfile] = useState({
    fullname: loginProfile.fullname,
    jobdesk: loginProfile.jobdesk,
    address: loginProfile.address,
    workplace: loginProfile.workplace,
    profileimage: loginProfile.profileimage,
    description: loginProfile.description,
  });

  // ava profile
  const [avatar, setAvatar] = useState(loginProfile.profileimage);

  const handleDataDiri = (e) => {
    const data = new FormData();
    data.append("fullname", dataProfile.fullname);
    data.append("jobdesk", dataProfile.jobdesk);
    data.append("address", dataProfile.address);
    data.append("workplace", dataProfile.workplace);
    data.append("description", dataProfile.description);
    data.append("avatar", dataProfile.profileimage);
    e.preventDefault();
    // console.log(data);
    dispatch(editDataDiri(data));
    // dispatch(uploadAva(data));
  };

  // Skill
  const [skill, setSkill] = useState("Java");

  // WorkExperience
  const [workExp, setWork] = useState({
    position: "",
    companyname: "",
    date: "",
    desc: "",
  });

  // PortoFolio
  const [portoPreview, setPortoPreview] = useState(portoImg);
  const [porto, setPorto] = useState({
    aplicationname: "",
    repolink: "",
    portotype: "",
    portoImg: "",
  });

  const handleChangePorto = (e) => {
    setPorto({
      ...porto,
      [e.target.name]: e.target.value,
    });
  };

  const uploadPortoImg = (e) => {
    const file = e.target.files[0];
    setPortoPreview(URL.createObjectURL(file));
    setPorto({
      ...porto,
      portoImg: file,
    });
  };

  const uploadImage = (e) => {
    const file = e.target.files[0];
    setAvatar(URL.createObjectURL(file));
    setDataProfile({
      ...dataProfile,
      profileimage: file,
    });
  };

  const addPorto = (e) => {
    const data = new FormData();
    data.append("aplicationname", porto.aplicationname);
    data.append("repolink", porto.repolink);
    data.append("portotype", porto.portotype);
    data.append("image", porto.portoImg);
    e.preventDefault();
    // console.log(data);
    dispatch(addPortofolio(data));
  };

  const onHandleWorkExp = (e) => {
    setWork({
      ...workExp,
      [e.target.name]: e.target.value,
    });
  };

  const handleChange = (e) => {
    setDataProfile({
      ...dataProfile,
      [e.target.name]: e.target.value,
    });
  };

  console.log(dataProfile.profileimage);

  // useEffect(() => {
  //   dispatch(getProfileByID());
  // }, [cancel]);

  return (
    <div>
      <Navbar isLogin={true}></Navbar>

      <main>
        <div className="container-fluid bg-light positon-relative">
          <div className={"col-12 position-absolute " + styles.background}></div>
          <div className="row flex-column">
            <div className="col-12  mt-5">
              <div className="container">
                <div className="row">
                  <div className="col-4">
                    <CardAlter
                      img={avatar ? avatar : ava}
                      onChange={(e) => {
                        uploadImage(e);
                      }}
                      textPosition="text-start"
                      titleImg="Edit"
                      width="100%"
                    >
                      <label className={styles.edit} htmlFor="files">
                        Edit photo
                      </label>
                      <input
                        hidden="true"
                        type="file"
                        id="files"
                        className="form-control btn text-center"
                        accept="image/"
                        onChange={(e) => {
                          uploadImage(e);
                        }}
                      />
                      <p className="fs-5 fw-bold">{loginProfile.fullname}</p>
                      <span>Web Developer</span>
                      <p className="fw-light">Purwokerto, Jawa Tengah</p>
                      <span className="fw-light">Freelancer</span>
                    </CardAlter>
                    <ButtonAlter
                      onClick={(e) => {
                        handleDataDiri(e);
                        navigate(`/profilePekerja`);
                      }}
                      className="mt-3 py-2"
                      width="100%"
                      backgroundColor="#5E50A1"
                      color="white"
                      border="none"
                    >
                      Simpan
                    </ButtonAlter>
                    <ButtonAlter
                      onClick={(e) => {
                        setDataProfile({
                          ...dataProfile,
                          fullname: loginProfile.fullname,
                          jobdesk: loginProfile.jobdesk,
                          address: loginProfile.address,
                          workplace: loginProfile.workplace,
                          description: loginProfile.description,
                        });
                        setAvatar(loginProfile.profileimage);
                      }}
                      className="mt-3 py-2"
                      width="100%"
                      backgroundColor="white"
                      color="#5E50A1"
                      border="1px solid gray"
                    >
                      Batal
                    </ButtonAlter>
                  </div>
                  <div className="col-8">
                    <CardAlter width="100%">
                      <h4>Data Diri</h4>
                      <hr />
                      <Label className="mt-2" title="Nama Lengkap"></Label>
                      <Input name="fullname" css="input-form" value={dataProfile.fullname} onChange={handleChange} placeholder="Masukan nama lengkap"></Input>
                      <Label className="mt-2" title="Job Desk"></Label>
                      <Input name="jobdesk" css="input-form" value={dataProfile.jobdesk} onChange={handleChange} placeholder="Masukan Job Desk"></Input>
                      <Label className="mt-2" title="Domisil"></Label>
                      <Input name="address" css="input-form" value={dataProfile.address} onChange={handleChange} placeholder="Masukan Domisili"></Input>
                      <Label className="mt-2" title="Tempat Kerja"></Label>
                      <Input name="workplace" css="input-form" value={dataProfile.workplace} onChange={handleChange} placeholder="Masukan Tempat Kerja"></Input>
                      <Label className="mt-2" title="Deskripsi Singkat"></Label>
                      <textarea name="description" value={dataProfile.description} onChange={handleChange} style={{ height: "100px" }} id="" className="form-control"></textarea>

                      {/* <Input css="input-form" placeholder="Tuliskan Deskripsi Singkat"></Input> */}
                    </CardAlter>
                    <CardAlter className="mt-5" width="100%">
                      <h4>Skill</h4>
                      <hr />
                      <div className="row">
                        <div className="col-10">
                          <Input
                            onChange={(e) => {
                              setSkill(e.target.value);
                            }}
                            css="input-form"
                            placeholder={skill}
                          ></Input>
                        </div>
                        <div className="col-2 mt-1">
                          <ButtonAlter
                            onClick={() => {
                              dispatch(addnewSkill({ skill: skill }));
                            }}
                            color="white"
                            border="none"
                            className="p-2"
                            backgroundColor="#FBB017"
                          >
                            Simpan
                          </ButtonAlter>
                        </div>
                      </div>
                    </CardAlter>
                    <CardAlter className="mt-2" width="100%">
                      <h4>Pengalaman Kerja</h4>
                      <hr />
                      <Label className="mt-2" title="Posisi"></Label>
                      <Input
                        name="position"
                        // value={(e) => e.target.value}
                        onChange={(e) => {
                          onHandleWorkExp(e);
                        }}
                        css="input-form"
                        placeholder="Web Developer"
                      ></Input>
                      <div className="row">
                        <div className="col-6">
                          <Label className="mt-2" title="Nama Perusahaan"></Label>
                          <Input
                            name="companyname"
                            // value={(e) => e.target.value}
                            onChange={(e) => {
                              onHandleWorkExp(e);
                            }}
                            css="input-form"
                            placeholder="PT Harus Bisa"
                          ></Input>
                        </div>
                        <div className="col-6">
                          <Label className="mt-2" title="Bulan/Tahun"></Label>
                          <Input
                            name="date"
                            // value={(e) => e.target.value}
                            onChange={(e) => {
                              onHandleWorkExp(e);
                            }}
                            css="input-form"
                            placeholder="Januari 2018"
                          ></Input>
                        </div>
                      </div>
                      <textarea
                        name="desc"
                        onChange={(e) => {
                          onHandleWorkExp(e);
                        }}
                        style={{ height: "100px" }}
                        id=""
                        className="form-control"
                      ></textarea>
                      <hr className={styles.hr2} />
                      <ButtonAlter
                        onClick={() => {
                          dispatch(addWorkExperience(workExp));
                        }}
                        className="p-2 w-100 mt-2"
                        backgroundColor="white"
                        border="1px solid #FBB017"
                      >
                        Tambah Pengalaman Kerja
                      </ButtonAlter>
                    </CardAlter>
                    <CardAlter className="mt-2" width="100%">
                      <h4>Portofolio</h4>
                      <hr />
                      <Label className="mt-2" title="Nama Aplikasi"></Label>
                      <Input
                        name="aplicationname"
                        onChange={(e) => {
                          handleChangePorto(e);
                        }}
                        css="input-form"
                        placeholder="Masukan Nama Aplikasi"
                      ></Input>
                      <Label className="mt-2" title="Link Repository"></Label>
                      <Input
                        name="repolink"
                        onChange={(e) => {
                          handleChangePorto(e);
                        }}
                        css="input-form"
                        placeholder="Masukan Link Repository"
                      ></Input>
                      <div className="">
                        <Label className="mt-2" title="Type portfolio"></Label>
                        <div className="col-sm-6">
                          <div className="form-check form-check-inline p-2">
                            <input
                              className="form-check-input ms-2"
                              type="radio"
                              name="inlineRadioOptions"
                              checked={porto.portotype === "Aplikasi Mobile"}
                              id="inlineRadio1"
                              value="Aplikasi Mobile"
                              onChange={(e) => setPorto({ ...porto, portotype: e.target.value })}
                            />
                            <label className="form-check-label ms-2" for="inlineRadio1">
                              Aplikasi Mobile
                            </label>
                          </div>
                          <div className="form-check form-check-inline p-2 ms-5">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="inlineRadioOptions"
                              checked={porto.portotype === "Aplikasi Web"}
                              id="inlineRadio2"
                              value="Aplikasi Web"
                              onChange={(e) => setPorto({ ...porto, portotype: e.target.value })}
                            />
                            <label className="form-check-label" for="inlineRadio2">
                              Aplikasi Web
                            </label>
                          </div>
                        </div>
                      </div>
                      <Label className="mt-2" title="upload gambar"></Label>
                      <div>
                        <img className="img-fluid" src={portoPreview} alt="porto Img" />
                        <input type="file" className="form-control btn" accept="image/" onChange={(e) => uploadPortoImg(e)} />
                      </div>
                      <hr className={styles.hr2} />
                      <ButtonAlter
                        onClick={(e) => {
                          addPorto(e);
                        }}
                        className="p-2 w-100"
                        backgroundColor="white"
                        border="1px solid #FBB017"
                      >
                        Tambah Portofolio
                      </ButtonAlter>
                    </CardAlter>
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

export default EditPekerja;
