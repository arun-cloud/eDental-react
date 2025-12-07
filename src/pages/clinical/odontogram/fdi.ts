export const mapToFDI = (toothId: number): string => {
    if (toothId < 1 || toothId > 32) return String(toothId);

    // Upper Arch
    if (toothId >= 1 && toothId <= 8) return `1${toothId}`;         // 11–18
    if (toothId >= 9 && toothId <= 16) return `2${toothId - 8}`;    // 21–28

    // Lower Arch
    if (toothId >= 17 && toothId <= 24) return `3${toothId - 16}`;  // 31–38
    if (toothId >= 25 && toothId <= 32) return `4${toothId - 24}`;  // 41–48

    return String(toothId);
};
