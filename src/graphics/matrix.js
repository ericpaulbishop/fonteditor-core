/**
 * @file matrix变换操作
 * @author mengke01(kekee000@gmail.com)
 */

/**
 * 仿射矩阵相乘
 *
 * @param  {Array=} matrix1 矩阵1
 * @param  {Array=} matrix2 矩阵2
 * @return {Array}         新矩阵
 */
export function mul(matrix1 = [1, 0, 0, 1], matrix2 = [1, 0, 0, 1]) {
    // 旋转变换 4 个参数
    if (matrix1.length === 4) {
        return [
            matrix1[0] * matrix2[0] + matrix1[2] * matrix2[1],
            matrix1[1] * matrix2[0] + matrix1[3] * matrix2[1],
            matrix1[0] * matrix2[2] + matrix1[2] * matrix2[3],
            matrix1[1] * matrix2[2] + matrix1[3] * matrix2[3]
        ];
    }
    // 旋转位移变换, 6 个参数

    return [
        matrix1[0] * matrix2[0] + matrix1[2] * matrix2[1],
        matrix1[1] * matrix2[0] + matrix1[3] * matrix2[1],
        matrix1[0] * matrix2[2] + matrix1[2] * matrix2[3],
        matrix1[1] * matrix2[2] + matrix1[3] * matrix2[3],

        matrix1[0] * matrix2[4] + matrix1[2] * matrix2[5] + matrix1[4],
        matrix1[1] * matrix2[4] + matrix1[3] * matrix2[5] + matrix1[5]
    ];
}

/**
 * 多个仿射矩阵相乘
 *
 * @param {...Array} matrixs matrix array
 * @return {Array}         新矩阵
 */
export function multiply(...matrixs) {
    let result = matrixs[0];
    for (let i = 1, matrix; (matrix = matrixs[i]); i++) {
        result = mul(result, matrix);
    }

    return result;
}
