
const { Product,TypeProduct,colors } = require("../models");

const { Op } = require("sequelize");
const { cloudinary } = require("../untils/cloundinary");

const createProducts = async (req, res) => {

  const { nameProduct, price, description, productFlowTypeID, quantityProducts,colorProductsID } = req.body;

  try {
    const result = await cloudinary.uploader.upload(req.file.path, {
      public_id: "products",
      with: 500,
      height: 500,
      crop: 'fill'
    })
    const newProducts = await Product.create({
      nameProduct,
      colorProductsID,
      price,
      description,
      picturesZero: result.url,
      // picturesOne: result.url,
      // picturesTwo: result.url,
      // picturesThree: result.url,
      // picturesFour: result.url,
      productFlowTypeID,
      quantityProducts,
    });
    res.status(200).send(newProducts);
  } catch (err) {
    res.status(500).send(err);
    console.log(err);
  }
};
const getAllProducts = async (req, res) => {

  const getAll = await Product.findAll({include:[{model:TypeProduct,as:"flowTypeProducts"},{model:colors,as:"colorFlowProducts"}]}); //include:["idImagesProduct"]
  try {
    res.status(200).send(getAll);
  } catch (err) {
    res.status(500).send(err);
  }
};
const getOneProducts = async (req, res) => {
  const { id } = req.params;
  const getOne = await Product.findOne({include:[{model:TypeProduct,as:"flowTypeProducts"},{model:colors,as:"colorFlowProducts"}]},{ where: { id } });
  try {
    res.status(200).send(getOne);
  } catch (err) {
    res.status(200).send(err);
  }
};
const updateProducts = async (req, res) => {
  const { id } = req.params;

   const { file } = req;
   const { nameProduct, colorProductsID, price, description, productFlowTypeID, quantityProducts,products } = req.body;


  let image 
  if(file){
    const upload= await cloudinary.uploader.upload(file.path,{
      public_id:'products',
      with: 500,
      height: 500,
      crop: 'fill'
    })
    image=upload.url
  }else{
    image=products
  }

  const updateUsers = await Product.update(
    { nameProduct, colorProductsID, price, description, productFlowTypeID, quantityProducts,pictures:image },

    { where: { id } }
  );
  try {
    res.status(200).send(updateUsers);
  } catch (err) {
    res.status(200).send(err);
  }
};
const deleteProducts = async (req, res) => {
  const { id } = req.params;
  
  try {
    const deleUsers = await Product.destroy({ where: { id } });

    deleUsers &&  res.status(200).send({message:"xoa thanh cong"});
  } catch (err) {
    res.status(200).send(err);
  }
};
const fillPriceMax = async (req, res) => {
  const pageAsNumber = Number.parseInt(req.params.page);
  const sizeAsNumber = Number.parseInt(req.query.size);

  // s??? trang b???t ?????u
  let page = 0;
  if (!Number.isNaN(pageAsNumber) && pageAsNumber > 0) {
    page = pageAsNumber;
  }

  // s??? s???n ph???m trong 1 trang
  let size = 6;
  if (
    !Number.isNaN(sizeAsNumber) &&
    !(sizeAsNumber > 6) &&
    !(sizeAsNumber < 1)
  ) {
    size = sizeAsNumber;
  }
  const productsWithCount = await Product.findAndCountAll({
    limit: size,
    offset: page * size,
    order: [["price", "DESC"]],
  });

  try {
    if (productsWithCount) {
      res.send({
        content: productsWithCount.rows,
        totalPages: Math.ceil(productsWithCount.count / Number.parseInt(size)),
      });
    } else {
      res.send({
        content: productsWithCount.rows,
        totalPages: Math.ceil(productsWithCount.count / Number.parseInt(size)),
      });
      const getAll = await Product.findAll({});
      res.status(200).send(getAll);
    }
  } catch (err) {
    res.send(err);
    console.log(err);
  }
};
// ph??n trang theo gia 1
const fillPriceMin = async (req, res) => {
  const pageAsNumber = Number.parseInt(req.params.page);
  const sizeAsNumber = Number.parseInt(req.query.size);

  // s??? trang b???t ?????u
  let page = 0;
  if (!Number.isNaN(pageAsNumber) && pageAsNumber > 0) {
    page = pageAsNumber;
  }

  // s??? s???n ph???m trong 1 trang
  let size = 6;
  if (
    !Number.isNaN(sizeAsNumber) &&
    !(sizeAsNumber > 6) &&
    !(sizeAsNumber < 1)
  ) {
    size = sizeAsNumber;
  }

  const productsWithCount = await Product.findAndCountAll({
    limit: size,
    offset: page * size,
    order: [["price", "ASC"]],
  });

  try {
    if (productsWithCount) {
      res.send({
        content: productsWithCount.rows,
        totalPages: Math.ceil(productsWithCount.count / Number.parseInt(size)),
      });
    } else {
      res.send({
        content: productsWithCount.rows,
        totalPages: Math.ceil(productsWithCount.count / Number.parseInt(size)),
      });
      const getAll = await Product.findAll({});
      res.status(200).send(getAll);
    }
  } catch (err) {
    res.send(err);
    console.log(err);
  }
};
// ph??n trang
const paginationProducts = async (req, res) => {
  const pageAsNumber = Number.parseInt(req.params.page);
  const sizeAsNumber = Number.parseInt(req.query.size);

  let page = 0;
  if (!Number.isNaN(pageAsNumber) && pageAsNumber > 0) {
    page = pageAsNumber;
  }

  let size = 6;
  if (
    !Number.isNaN(sizeAsNumber) &&
    !(sizeAsNumber > 6) &&
    !(sizeAsNumber < 1)
  ) {
    size = sizeAsNumber;
  }

  const productsWithCount = await Product.findAndCountAll({
    limit: size,

    offset: (page) * size,
    include:{model:colors,as:"colorFlowProducts"}

  });
  res.send({
    content: productsWithCount.rows,
    totalPages: Math.ceil(productsWithCount.count / Number.parseInt(size)),
  });
};
// l???c theo m??u

const filterColor = async(req,res) =>{
  
    const pageAsNumber = Number.parseInt(req.params.page);
    const sizeAsNumber = Number.parseInt(req.query.size);
    const { colorID } = req.params;


  let page = 0;
  if (!Number.isNaN(pageAsNumber) && pageAsNumber > 0) {
    page = pageAsNumber;
  }

  let size = 6;
  if (
    !Number.isNaN(sizeAsNumber) &&
    !(sizeAsNumber > 6) &&
    !(sizeAsNumber < 1)
  ) {
    size = sizeAsNumber;
  }


    const productsWithCount = await Product.findAndCountAll({
      limit: size,
      offset: page * size,
      include:{model:colors,as:"colorFlowProducts"},
      where:{
        colorProductsID:colorID
      }
    }); 
    try{
      if(productsWithCount){
        res.send({
          content: productsWithCount.rows,
          totalPages: Math.ceil(productsWithCount.count / Number.parseInt(size))
        });
      }
      else{
        res.send({
          content: productsWithCount.rows,
          totalPages: Math.ceil(productsWithCount.count / Number.parseInt(size))
        });
        const getAll = await Product.findAll({
          
        });
        res.status(200).send(getAll);
      }
    }
    catch(err){
      res.status(500).send(err);
      console.log(err);

    }
};

const getSearch = async (req, res) => {
  let { search } = req.query;
  try {
    if (search) {

      search = decodeURIComponent(search);
      const getall = await Product.findAll({
        where: {
          [Op.or]: [
            {
              nameProduct: {
                [Op.like]: `%${search}%`,
              },
            },
            {
              "$flowTypeProducts.nameTypeProduct$": {
                [Op.like]: `%${search}%`,
              },
            },
          ],
        },
        include: [
          {
            model: TypeProduct,
            as: "flowTypeProducts",
          },
        ],
      });
      res.send(getall);
    } else {
      const getAll = await Product.findAll({});
      res.status(200).send(getAll);
    }
  } catch (err) {
    res.status(500).send(err);
    console.log(err);

  } 
}

// l???c theo typeProducts
const getFlowTypeProduct = async(req,res) =>{
  const pageAsNumber = Number.parseInt(req.params.page);
  const sizeAsNumber = Number.parseInt(req.query.size);

  // s??? trang b???t ?????u
  let page = 0;
  if(!Number.isNaN(pageAsNumber) && pageAsNumber > 0){
    page = pageAsNumber;
  }

  // s??? s???n ph???m trong 1 trang
  let size = 6;
  if(!Number.isNaN(sizeAsNumber) && !(sizeAsNumber > 6) && !(sizeAsNumber < 1)){
    size = sizeAsNumber;
  }
 
  const productsWithCount = await Product.findAndCountAll({
      limit: size,
      offset: page * size,  
      include:{model:colors,as:"colorFlowProducts"},
      where: { 'productFlowTypeID': req.params.idType },
  });
  try{
      // n???u l?? productsWithCount th?? s??? ch???y v??o ????y v?? ph??n trang v?? l???c theo typeProducts
      if(productsWithCount){
          res.send({
            content: productsWithCount.rows,
            totalPages: Math.ceil(productsWithCount.count / Number.parseInt(size))
          });
      }
      // n???u kh??ng ch???n filter theo typeProduct th?? s??? tr??? l???i t???t c??? s???n ph???m
      else{
          res.send({
              content: productsWithCount.rows,
              totalPages: Math.ceil(productsWithCount.count / Number.parseInt(size))
          });
          const getAll = await Product.findAll({});
          res.status(200).send(getAll);
      }
  }
  catch(err){
    res.send(err)
  }
};

module.exports = {
  createProducts,
  getAllProducts,
  getOneProducts,
  updateProducts,
  deleteProducts,
  fillPriceMin,
  fillPriceMax,
  paginationProducts,
  filterColor,

  getSearch,

  getFlowTypeProduct,


};
