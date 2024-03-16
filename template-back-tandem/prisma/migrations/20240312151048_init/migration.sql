BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[Producto] (
    [id] INT NOT NULL IDENTITY(1,1),
    [nombre] NVARCHAR(1000) NOT NULL,
    [precio] FLOAT(53) NOT NULL,
    [cantidad] INT NOT NULL,
    [categoriaId] INT,
    CONSTRAINT [Producto_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[Categoria] (
    [id] INT NOT NULL IDENTITY(1,1),
    [nombre] NVARCHAR(1000) NOT NULL,
    CONSTRAINT [Categoria_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- AddForeignKey
ALTER TABLE [dbo].[Producto] ADD CONSTRAINT [Producto_categoriaId_fkey] FOREIGN KEY ([categoriaId]) REFERENCES [dbo].[Categoria]([id]) ON DELETE SET NULL ON UPDATE CASCADE;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
