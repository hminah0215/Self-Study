import { Cat, CatType } from './cats.model';
import { Router } from 'express';
import {
  createCat,
  deleteCat,
  patchCat,
  putCat,
  readAllCat,
  readCat,
} from './cats.service';

const router = Router();

// Read 고양이 전체 데이터 조회하기

router.get('/cats', readAllCat);

/*
router.get('/cats', (req, res) => {
  try {
    const cats = Cat;
    // throw new Error('db connect error');
    res.status(200).send({
      success: true,
      data: {
        cats,
      },
    });
  } catch (error: any) {
    res.status(400).send({
      success: false,
      error: error.message,
    });
  }
});
*/

// Read 특정 고양이 데이터 조회하기
router.get('/cats/:id', readCat);

// Create 새로운 고양이 정보 추가
router.post('/cats', createCat);

// Update 고양이 데이터 업데이트 -> PUT
router.put('/cats/:id', putCat);

// Update 고양이 데이터 부분 업데이트 -> PATCH
router.patch('/cats/:id', patchCat);

// DELETE 고양이 데이터 삭제 -> DELETE
router.delete('/cats/:id', deleteCat);

export default router;
