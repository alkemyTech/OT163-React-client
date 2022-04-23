import { useEffect } from 'react';
import { Container, Table, Button } from 'react-bootstrap';
import { AiFillDelete } from 'react-icons/ai';
import { RiFileEditFill } from 'react-icons/ri';
import { BiPlusMedical } from 'react-icons/bi';
import { FaThList } from 'react-icons/fa';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { DELETE_NOVEDAD_FN, GET_NOVEDAD_FN } from '../../../redux/novedades/actions';
import ProgressSpinner from '../../Progress/ProgressSpinner';
import { alertService } from '../../../Services/alertService';

const NewsList = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const newsState = useSelector(state => state.novedades);
  const stateLoading = useSelector(state => state.global.loading);

  useEffect(() => {
    dispatch(GET_NOVEDAD_FN());
  }, []);

  useEffect(() => {}, [newsState.novedades]);

  return (
    <>
      <Container>
        <div
          name="containerModule"
          id="containerModule"
          className="border rounded mb-4"
        >
          <div
            name="headerModule"
            id="headerModule"
            className="d-flex justify-content-between align-items-center bg-lightt shadow border-5 border-bottom border-primary p-3"
          >
            <h3 className="text-uppercase text-primary align-middle">
              <span className="align-top">
                <FaThList />
              </span>{' '}
              <span className="align-middle">Listado Noticias</span>
            </h3>
            {}
            <Button className='btn-info' onClick={() => history.push('/backoffice/news/edit')}>
              Agregar noticia
            </Button>

            <Link
              to="/backoffice/news/create"
              title="Agregar noticia"
              className="d-block d-sm-none "
            >
              <div
                className="text-center btn btn-primary rounded-circle"
                style={{ width: '40px', height: '40px' }}
              >
                <BiPlusMedical className="text-white fw-bold" />
                {/* <span className="fw-1 text-white fw-bold">+</span> */}
              </div>
            </Link>
          </div>

          {stateLoading
            ? <div className="d-flex justify-content-center my-5">
              <ProgressSpinner state={stateLoading} />
            </div>
            : <div name="bodyModule" id="bodyModule" className="p-3">
              {newsState.novedades.length > 0
                ? (
                  <>
                    <Table striped hover responsive>
                      <thead className="bg-primary text-white rounded">
                        <tr key={'news_0'}>
                          <th hidden>#</th>
                          <th>Nombre</th>
                          <th className="text-center">Imagen</th>
                          <th className="text-center">Creación</th>
                          <th className="text-center" colSpan={2}>
                            Acciones
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {newsState.novedades.map((element) => {
                          return <RowsNew newData={[element]} key={element.id} />;
                        })}
                      </tbody>
                    </Table>
                  </>
                )
                : (
                  <div
                    className="alert-warning rounded d-flex justify-content-center align-items-center "
                    style={{ height: '300px' }}
                  >
                    <h1>No hay noticias para mostrar</h1>
                  </div>
                )}
            </div>
          }

        </div>
      </Container>
    </>
  );
};
// ------------------------------------------- COMPONENTE ROW NEW LIST---------------------------------------
const RowsNew = ({ newData }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleEdit = element => {
    history.push('/backoffice/news/edit', {
      id: element.id,
    });
  };

  const handleDelete = async id => {
    const confirm = await alertService('confirm', 'Seguro deseas eliminar este miembro?');
    if (confirm) dispatch(DELETE_NOVEDAD_FN(id));
  };

  return (
    <tr key={'new_' + newData[0].id} className="align-middle">
      {newData.map((element) => {
        return (
          <>
            <td hidden>{element.id}</td>
            <td>{element.name}</td>
            <td className="text-center" style={{ width: '230px' }}>
              {element.image !== ''
                ? (
                  <img
                    src={element.image}
                    alt={element.name}
                    className="img-thumbnail rounded"
                    style={{ width: '200px', height: '100px' }}
                  />
                )
                : (
                  <svg
                    className="img-thumbnail rounded"
                    width="200px"
                    height="100px"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-label="Placeholder: Thumbnail"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                  >
                    <title>{element.name}</title>
                    <rect width="100%" height="100%" fill="#514242"></rect>
                    <text x="5%" y="50%" fill="#eceeef" dy=".5em">
                      No media
                    </text>
                  </svg>
                )}
            </td>
            <td className="text-center" style={{ width: '120px' }}>
              {element.createdAt}
            </td>
            <td className="text-center" style={{ width: '70px' }}>
              <Button
                className="btn btn-danger"
                onClick={() => handleDelete(element.id)}
              >
                <AiFillDelete />
              </Button>
            </td>
            <td className="text-center" style={{ width: '70px' }}>

              <Button className='btn-info' onClick={() => {
                handleEdit(element);
              }}>
                <RiFileEditFill />
              </Button>

            </td>
          </>
        );
      })}
    </tr>
  );
};

export default NewsList;
