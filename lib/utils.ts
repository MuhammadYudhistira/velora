export const formatRupiah = (amount: number): string => {
    return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0,
    }).format(amount);
};

export const formatCurrencyParts = (value: number) => {
    const formatted = new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 2,
    }).format(value);

    const [main, decimal] = formatted.split(",");
    return { main, decimal: `,${decimal}` };
};
