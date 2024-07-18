using System;
using System.IO;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;

namespace Cre8Wise.EntityFrameworkCore;

/* This class is needed for EF Core console commands
 * (like Add-Migration and Update-Database commands) */
public class Cre8WiseDbContextFactory : IDesignTimeDbContextFactory<Cre8WiseDbContext>
{
    public Cre8WiseDbContext CreateDbContext(string[] args)
    {
        Cre8WiseEfCoreEntityExtensionMappings.Configure();

        var configuration = BuildConfiguration();

        var builder = new DbContextOptionsBuilder<Cre8WiseDbContext>()
            .UseSqlServer(configuration.GetConnectionString("Default"));

        return new Cre8WiseDbContext(builder.Options);
    }

    private static IConfigurationRoot BuildConfiguration()
    {
        var builder = new ConfigurationBuilder()
            .SetBasePath(Path.Combine(Directory.GetCurrentDirectory(), "../Cre8Wise.DbMigrator/"))
            .AddJsonFile("appsettings.json", optional: false);

        return builder.Build();
    }
}
