/**
You are given an integer array nums and an integer k. Find the maximum subarray sum of all the subarrays of nums that meet the following conditions:
The length of the subarray is k, and
All the elements of the subarray are distinct.
Return the maximum subarray sum of all the subarrays that meet the conditions. If no subarray meets the conditions, return 0.
A subarray is a contiguous non-empty sequence of elements within an array.
 */
var maximumSubarraySum = function(nums, k) {
    // Inicializa a soma máxima como 0 (caso não encontremos nenhum subarray válido)
    let maxSum = 0;
    
    // Mantém a soma dos elementos na janela atual
    let currentSum = 0;
    
    // Mapa para armazenar a frequência de cada número na janela atual
    const frequencyMap = new Map();
    
    // Ponteiro esquerdo da janela deslizante
    let left = 0;

    // Loop através do array com o ponteiro direito
    for (let right = 0; right < nums.length; right++) {
        // 1. Expansão da janela: adiciona o elemento atual
        const currentNum = nums[right];
        
        // Adiciona o número atual à soma da janela
        currentSum += currentNum;
        
        // Atualiza a contagem no mapa de frequência
        // Se o número já existe no mapa, incrementa sua contagem
        // Se não existe, inicia com 1
        frequencyMap.set(currentNum, (frequencyMap.get(currentNum) || 0) + 1);

        // 2. Verifica se a janela atingiu o tamanho desejado (k)
        if (right - left + 1 === k) {
            // 3. Verifica se todos elementos na janela são distintos
            // (O tamanho do mapa deve ser igual a k)
            if (frequencyMap.size === k) {
                // Atualiza a soma máxima se a corrente for maior
                maxSum = Math.max(maxSum, currentSum);
            }

            // 4. Prepara para mover a janela: remove o elemento mais à esquerda
            const leftNum = nums[left]; // Número que será removido
            
            // Subtrai da soma corrente
            currentSum -= leftNum;
            
            // Obtém a contagem atual desse número
            const count = frequencyMap.get(leftNum);
            
            // 5. Atualiza o mapa de frequência
            if (count === 1) {
                // Se era a única ocorrência, remove completamente
                frequencyMap.delete(leftNum);
            } else {
                // Se havia múltiplas ocorrências, decrementa a contagem
                frequencyMap.set(leftNum, count - 1);
            }
            
            // 6. Move o ponteiro esquerdo para a direita
            left++;
        }
    }

    // Retorna a soma máxima encontrada (ou 0 se nenhum subarray válido foi encontrado)
    return maxSum;
};